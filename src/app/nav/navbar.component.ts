import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';
import { ISession, EventService } from '../events';

@Component({
  selector: 'events-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
    `
    .nav-navbar {font-size: 15px;}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active { color: #F97924; }
    `
  ]
})

export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];

   constructor(public auth: AuthService, private eventService: EventService) {}

   searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
   }
}
