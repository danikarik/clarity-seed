import { Component, OnInit } from '@angular/core';

import { Story } from '../story';
import { StoryService } from '../story.service';
import { HeaderService } from '../header.service';

import { StoryComparator } from '../utils/story-comparator';
import { StoryFilter } from '../utils/story-filter'

import { DictService } from '../dict.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public open: boolean = false;

  private storyComparator = new StoryComparator();
  private storyFilter = new StoryFilter();

  myFilterValue = "";

  model: Story = new Story();

  submitted: boolean = false;

  stories: Story[];

  nationality = this.dictService.getNationality();
  regions = this.dictService.getRegions();
  districts = this.dictService.getDistricts();
  docTypes = this.dictService.getDocTypes();
  insuranceCompanies = this.dictService.getInsuranceCompanies();
  socialStatutes = this.dictService.getSocialStatutes();

  genderLabel = "";

  isEditting: boolean = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    this.model.name = this.model.lastName + " " + this.model.firstName + " " + this.model.middleName;
    if (this.model.gender === 1) {
      this.genderLabel = "Мужской";
    } else { this.genderLabel = "Женский"; }
    if (!this.isEditting) {
      this.storyService.addStory(this.model)
        .subscribe(story => {
          this.stories.push(story);
        });
      form.reset();
    } else {
      this.storyService.updateStory(this.model)
      .subscribe(() => this.goBack(this.model));
    }
  }

  constructor(
    public header: HeaderService,
    private storyService: StoryService,
    private dictService: DictService) { }

  ngOnInit() {
    this.header.show();
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);
  }

  goBack(story: Story): void {
    this.model = story;
  }

  add() {
    this.model = new Story();
    this.isEditting = false;
    this.submitted = false;
  }

  edit(story: Story): void {
    this.isEditting = true;
    this.model = story;
    this.open = true;
    this.submitted = false;
  }

  delete(story: Story): void {
    this.stories = this.stories.filter(h => h !== story);
    this.storyService.deleteStory(story).subscribe();
  }

  calculateAge() {
    if (this.model.birthDate) {
      var today = new Date();
      var birthDate = new Date(this.model.birthDate);
      var age = today.getFullYear() - birthDate.getFullYear();
      var month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) { age--; }
      this.model.age = age;
    }
  }

}
