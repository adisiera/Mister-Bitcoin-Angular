import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]=[]
  @Output() onSelectContact = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    console.log('contacts:',this.contacts);
    
  }

}
