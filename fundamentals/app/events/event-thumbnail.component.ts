import { IEvent } from './shared/index';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>date: {{ event?.date }}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
          time: {{ event?.time}}
          <span *ngSwitchCase="'8:00 am'">early start</span>
          <span *ngSwitchCase="'10:00 am'">late start</span>
          <span *ngSwitchDefault>normal start</span>
        </div>
        <div>price: \${{ event?.price}}</div>
        <div *ngIf="event?.location">
            <span> location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          online url: {{event?.onlineUrl}}
        </div>
    </div>
`,
  styles: [
    `
    .thumbnail {min-height: 210px;}
    .pad-left {margin-left: 5px;}
    .well div {color: #bbb;}
    `
  ]
})
export class EventThumbnailComponent {
  // this event input is coming in from the template of events-list, like this
  // <event-thumbnail [event]="event"></event-thumbnail>
  @Input() event: IEvent;
  // // this eventClick output is going out to the template of events-list
  // @Output() eventClick = new EventEmitter();
  // handleClickMe() {
  //     console.log('clicked!');
  //     this.eventClick.emit(this.event.name);
  // }

  getStartTimeClass() {
    // you can return an object, a string, or an array
    // const isEarlyStart = this.event && this.event.time == '8:00 am';
    // return {green: isEarlyStart, big: isEarlyStart};

    if (this.event && this.event.time == '8:00 am') {
      return 'green big';
    }
    return '';
  }

  getStartTimeStyle() {
    if (this.event && this.event.time == '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
  }
}
