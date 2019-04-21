import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <events-thumnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
