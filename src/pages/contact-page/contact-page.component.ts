import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneValidator } from './validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', phoneValidator),
  })

  constructor(protected router: Router) {}
  
  onSubmit() {
    alert("Thanks for filling up the form. " + JSON.stringify(this.contactForm.value));
    this.router.navigate(['/dashboard']);
  }
}