import { AuthService } from './user/auth.service';
import { appRoutes } from './routes';
import {
  TOASTR_TOKEN, Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent
 } from './common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//let toastr: Toastr = window['toastr'];
declare let toastr: Toastr;
declare let $: any;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
