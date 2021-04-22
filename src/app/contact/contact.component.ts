import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // ngModel name="className" syntax, creates a form control instance and binds it to the input

  firstName;
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    // f.valid etc
  }

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Text' },
  ];
}
