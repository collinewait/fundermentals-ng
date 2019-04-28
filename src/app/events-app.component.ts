import { AuthService } from './user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <events-nav-bar></events-nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit{
  constructor(private auth: AuthService) {}

  ngOnInit() {
    console.log('init called');
    this.auth.checkAuthenticationStatus();
  }
}
