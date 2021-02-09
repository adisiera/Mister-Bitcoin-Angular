import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  contacts: Contact[] = []
  subscription: Subscription
  selectedContactId: string =null

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  onRemoveContact(contactId: string){
    this.contactService.deleteContact(contactId)
  }

  onFilter(filterBy){
    this.contactService.loadContacts(filterBy)
  }

  toggleOpenEdit(){
    this.router.navigateByUrl(this.router.url === '/contact' ? 'contact/edit' : '/contact')
  }

}
