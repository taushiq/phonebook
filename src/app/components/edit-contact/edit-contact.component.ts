import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private service: PhonebookService, private activatedRoute: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.service.getContactDetails(params['id'])
          .subscribe(contact => {
            this.contactForm.setValue({...contact});
          });
      });

    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(),
      dob: new FormControl(),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,12}$/)]),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      picture: new FormControl(),
      gender: new FormControl(),
    });    
  }

  saveChanges(){
    this.service.updateContact(this.contactForm.value)
      .subscribe( contact => {
        this.router.navigate(['contact-details', contact.id]);
      }

      );
  }

}
