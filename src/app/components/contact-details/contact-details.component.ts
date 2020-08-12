import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { PhonebookService } from '../../services/phonebook.service';
import { Router, ActivatedRoute } from '@angular/router';


const swal = window['swal'];

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: PhonebookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(p => {
      this.service.getContactDetails(p['id'])
        .subscribe(data => this.contact = data);
    });

  }


  deleteContact() {
    swal({
      title: 'You are about to delete this contact',
      text: 'Please confirm',
      icon: 'warning',
      buttons: [
        {
          text: 'Yes, I am sure',
          visible: true,
          value: true
        },
        {
          text: 'Cancel',
          visible: true,
          value: false
        }
      ]


    }).then(result => {
      if (result == true) {
        this.service.deleteContact(this.contact.id)
          .subscribe(() => {
            this.router.navigate(['/contact-list']);
          });
      }

    }

    )


  }

}
