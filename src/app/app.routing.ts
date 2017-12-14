/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StoryComponent } from './story/story.component';
import { JournalsComponent } from './journals/journals.component';
import { OperationsComponent } from './operations/operations.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { NotesComponent } from './notes/notes.component';
import { AppointmentComponent } from './appointment/appointment.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'stories', component: StoryComponent},
    {path: 'journals', component: JournalsComponent},
    {path: 'operations', component: OperationsComponent},
    {path: 'diagnoses', component: DiagnosesComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'appointments', component: AppointmentComponent}

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
