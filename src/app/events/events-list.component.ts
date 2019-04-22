import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { IEvent } from './shared';

@Component({
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
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
}
