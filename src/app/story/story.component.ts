import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { Story } from '../story';
import { StoryService } from '../story.service';

import { StoryComparator } from '../utils/story-comparator';
import { StoryFilter } from '../utils/story-filter'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  private storyComparator = new StoryComparator();
  private storyFilter = new StoryFilter();
  myFilterValue = "";

  public open: boolean = false;

  model: Story = new Story();
  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    this.storyService.addStory(this.model)
    .subscribe(story => {
      this.stories.push(story);
    });
  }

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
