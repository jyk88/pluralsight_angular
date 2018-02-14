import { ISession, restrictedWords } from './../shared/index';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'app/events/event-details/create-session.component.html',
  styles: [
    `
    em {float: right; color: red; padding-left: 10px;}
    .error input, .error textarea, .error select { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
  
  `
  ]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar', 'poop'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValue) {
    let session: ISession = {
      id: undefined,
      name: formValue.name,
      presenter: formValue.presenter,
      duration: +formValue.duration,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []
    };

    console.log(session);
  }
}
