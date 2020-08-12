import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:4300/contacts/';


//concat('http://kvinod.com/old_ci/randomdata/images/' , (if gender == 'Male' then 'men' else 'women' end), '/' , id , '.jpg')

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }


  getContactDetails(id: number): Observable<Contact>{
    return this.http.get(baseUrl + id).map(data => data as Contact);
  
  }

  addNewContact(contact: Contact): Observable<Contact>{
    return this.http.post(baseUrl, contact).map(data => data as Contact);
  }

  updateContact(contact: Contact): Observable<Contact>{
    return this.http.put(baseUrl + contact.id, contact).map(data => data as Contact);
  }

  deleteContact(id: number): Observable<any>{
    return this.http.delete(baseUrl + id);
  
  }

  getAllContacts(pageNumber : number = 1): Observable<Contact[]>{
    let params = {
      '_page' : '' + pageNumber
    }
    return this.http.get(baseUrl, {params}).map(data => data as Contact[]);
  }

}
