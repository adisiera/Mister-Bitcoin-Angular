import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../model/contact.model';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  data: any;
  contact: Contact;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  onAddContact(){
    this.contactService.saveContact({...this.contact})
    this.contact = this.contactService.getEmptyContact()
    this.contactService.setFilter()
    this.router.navigate(['contact'])
  }
}
