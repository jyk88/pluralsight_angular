import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  EventRouteActivator,
  CreateSessionComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
  NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent

  ],
  providers: [
    EventService,
    ToastrService,
    { provide: APP_BASE_HREF, useValue: '/' },
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: canDeactivateCreateEvent },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function canDeactivateCreateEvent(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you did not save. you sure you want to cancel?');
  }
  return true;
}
