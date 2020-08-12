import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor(private service: PhonebookService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  addContact(){
    this.service.addNewContact(this.contact)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id])
      });
  }

}
