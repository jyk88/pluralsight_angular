import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
  <h1>upcoming ng2 events</h1>
  <hr />
  <!-- #thumbnail works as a pointer to the event-thumbnail component-->
  <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
  </div>`
})
export class EventsListComponent {
  // this event1 is referred to in the template above. it is emitted outside of this component
  // into event-thumbnail component.
  event1 = {
    id: 1,
    name: 'ng connect',
    date: '9/6/2015',
    time: '10:00am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'london',
      country: 'england'
    }
  };
}
