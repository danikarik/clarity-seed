import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header.service';
import { LoginComponent } from './login/login.component';
import { StoryService } from "./story.service";
import { StoryComponent } from './story/story.component';
import { DictService } from './dict.service';
import { JournalsComponent } from './journals/journals.component';
import { OperationsComponent } from './operations/operations.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        StoryComponent,
        JournalsComponent,
        OperationsComponent,
        DiagnosesComponent,
        NotesComponent,
        AppointmentComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        ClarityModule,
        ROUTING
    ],
    providers: [HeaderService, StoryService, DictService, NotesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
