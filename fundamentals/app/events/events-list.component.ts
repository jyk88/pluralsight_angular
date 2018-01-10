import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  template: `<div>
    <h1>upcoming ng2 events</h1>
      <hr />
      <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
      <!-- #thumbnail works as a pointer to the event-thumbnail component-->
      <event-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event]="event"></event-thumbnail>
      </div>
      </div>
    </div>`
})
export class EventsListComponent implements OnInit {
  events: any;
  // injecting a service
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName) {
    this.toastr.success('hi', eventName);
  }
}
