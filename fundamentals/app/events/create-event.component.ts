import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `
        <h1>new event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[create event form will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">save</button>
            <button type="cancel" class="btn btn-default" (click)="cancel()">cancel</button>
            
        </div>
    `
})
export class CreateEventComponent {

  isDirty:boolean = true;

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/events']);
  }
}
