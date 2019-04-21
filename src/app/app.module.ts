import { CreateEventComponent } from './events/create-event.compont';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ToastrService } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
