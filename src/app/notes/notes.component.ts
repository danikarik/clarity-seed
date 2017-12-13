import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { DictService } from '../dict.service';

import { Story } from '../story';
import { StoryService } from '../story.service';

import { Note } from '../note';
import { NotesService } from '../notes.service';

import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    public open: boolean = false;

    model: Note = new Note();
    notes: Note[];
    stories: Story[];

    submitted: boolean = false;
    editted: boolean = false;

    blocks: any[] = [
        { title: "Жалобы при поступлении", content: "" },
        { title: "Anamnesis morbi", content: "" },
        { title: "Anamnesis vitae", content: "" },
        { title: "Объективно", content: "" },
        { title: "Per Rectum", content: "" },
        { title: "ОБОСНОВАНИЕ", content: "" },
        { title: "ДИАГНОЗ", content: "" }
    ];

    useBlocks: boolean = false;
    editModal: boolean = false;

    constructor(
        public header: HeaderService,
        public dictService: DictService,
        private notesService: NotesService,
        private storyService: StoryService) { }

    ngOnInit() {
        this.header.show();
        this.getNotes();
        this.getStories();
    }

    onSubmit(form: NgForm): void {
        this.submitted = true;

        if (this.useBlocks) {
            this.model.text = "";
            for (let block of this.blocks) {
                this.model.text += block.title + ": \n" + block.content + "\n\n";
            }
        }

        if (!this.editted) {
            this.notesService.addNote(this.model)
                .subscribe(note => {
                    this.notes.push(note);
                });
            form.reset();
        } else {
            this.notesService.updateNote(this.model)
                .subscribe(() => this.goBack(this.model));
        }
    }

    getStories(): void {
        this.storyService.getStories()
            .subscribe(stories => this.stories = stories);
    }

    getNotes(): void {
        this.notesService.getNotes()
            .subscribe(notes => this.notes = notes);
    }

    goBack(note: Note): void {
        this.model = note;
    }

    add() {
        this.model = new Note();
        this.submitted = false;
        this.editted = false;
    }

    edit(note: Note): void {
        this.model = note;
        this.open = true;
        this.submitted = false;
        this.editted = true;
    }

    delete(note: Note): void {
        this.notes = this.notes.filter(h => h !== note);
        this.notesService.deleteNote(note).subscribe();
    }

    print(note: Note): void {
        console.log(note.text);
    }

    setDoctor(id: number): void {
        this.storyService.getStory(id)
            .subscribe(story => this.model.doctor = story.doctor);
    }
}
