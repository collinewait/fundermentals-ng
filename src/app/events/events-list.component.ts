import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <events-thumnail [event]="event"></events-thumnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
