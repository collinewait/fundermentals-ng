import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';
import { all } from 'q';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    a {cursor:pointer }
    .container { padding-left: 20px; padding-right: 20px}
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );
    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
