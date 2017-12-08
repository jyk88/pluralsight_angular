import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges() {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`the rating was ${this.rating} was clicked!`);
  }
}
