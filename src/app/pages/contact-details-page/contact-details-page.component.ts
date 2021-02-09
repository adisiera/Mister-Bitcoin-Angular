import { Component, Input,OnInit, Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  @Input() contactId: string;
  @Output() onSwitchContact = new EventEmitter <string>()
  contact: Contact;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getContactById(this.contactId).subscribe((contact) => {
      this.contact = contact
    })
  }

  toggleOpenEdit(){
    this.router.navigate(['contact/edit',this.contact._id])
    }

    onRemoveContact(contactId: string){
      this.contactService.deleteContact(contactId)
      this.contactService.loadContacts()
    }
}
