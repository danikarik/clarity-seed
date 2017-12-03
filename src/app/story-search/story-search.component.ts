import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-search',
  templateUrl: './story-search.component.html',
  styleUrls: ['./story-search.component.scss']
})
export class StorySearchComponent implements OnInit {

  stories$: Observable<Story[]>;
  private searchTerms = new Subject<string>();

  constructor(private storyService: StoryService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.stories$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.storyService.searchStories(term)),
    );
  }

}
