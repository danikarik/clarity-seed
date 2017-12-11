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
  nurses = this.dictService.getNurses();
  addrFroms = this.dictService.getAddrFroms();
  emergencyTypes = this.dictService.getEmergencyTypes();
  departments = this.dictService.getDepartments();
  profiles = this.dictService.getProfiles();
  wards = this.dictService.getWards();
  finsources = this.dictService.getFinsources();
  injuryTypes = this.dictService.getInjuryTypes();
  transportTypes = this.dictService.getTransportTypes();
  bloodGroups = this.dictService.getBloodGroups()
  dischargeResults = this.dictService.getDischargeResults();
  dischargeTreatments = this.dictService.getDischargeTreatments();
  doctors = this.dictService.getDoctors();

  isEditting: boolean = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    this.model.name = this.model.lastName + " " + this.model.firstName + " " + this.model.middleName;
    if (!this.isEditting) {
      this.storyService.addStory(this.model)
        .subscribe(story => {
          this.stories.push(story);
        });
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

  clear(): void {
      this.model = new Story();
  }

  calculateAge() {
    if (this.model.birthDate) {
      let today = new Date();
      let birthDate = new Date(this.model.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) { age--; }
      this.model.age = age;
    }
  }

  calculateDays() {
      if (this.model.receiptDateDep && this.model.dischargeDate) {
        let inDate = new Date(this.model.receiptDateDep);
        let outDate = new Date(this.model.dischargeDate);
        this.model.dischargeDays = outDate.getDate() - inDate.getDate();
      }
  }

}
