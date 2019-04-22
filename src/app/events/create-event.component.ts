import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px }
  .error input {background-color: #E3C3C5;}
  .error ::-webkit-input-placeholder { color: #999 }
  .error ::-moz-placeholder { color: #999 }
  .error :-moz-placeholder { color: #999 }
  .error :-ms-input-placeholder { color: #999 }
`]
})
export class CreateEventComponent implements OnInit {
  event: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.event = {
      name: 'Ng Spectacular',
      date: '8/8/2050',
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Colline highway',
        city: 'City of Waitire',
        country: 'Uganda'
      },
      onlineUrl: 'http://collinewait.com',
      imageUrl: 'http://collinewait.com/fu.png'
    };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
