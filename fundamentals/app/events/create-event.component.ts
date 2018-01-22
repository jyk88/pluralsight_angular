import { EventService } from './shared/event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
  em {float: right; color: red; padding-left: 10px;}
  .error input { background-color: #E3C3C5;}
  .error ::-webkit-input-placeholder {color: #999;}

`]
})
export class CreateEventComponent {

  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) { }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
