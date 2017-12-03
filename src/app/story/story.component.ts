import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public open: boolean = false;
  
  stories: Story[];

  constructor(
    public header: HeaderService,
    private storyService: StoryService) { }

  ngOnInit() {
    this.header.show();
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
    .subscribe(stories => this.stories = stories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.storyService.addStory({ name } as Story)
      .subscribe(story => {
        this.stories.push(story);
      });
  }

  delete(story: Story): void {
    this.stories = this.stories.filter(h => h !== story);
    this.storyService.deleteStory(story).subscribe();
  }

}
