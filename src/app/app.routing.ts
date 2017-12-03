/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryComponent } from './story/story.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'stories', component: StoryComponent},
    {path: 'detail/:id', component: StoryDetailComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
