import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {

  @Input() story: Story;
  
    constructor(
      private route: ActivatedRoute,
      private storyService: StoryService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.getStory();
    }
  
    getStory(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.storyService.getStory(id)
        .subscribe(story => this.story = story);
    }
  
    goBack(): void {
      this.location.back();
    }
  
   save(): void {
      this.storyService.updateStory(this.story)
        .subscribe(() => this.goBack());
    }

}
