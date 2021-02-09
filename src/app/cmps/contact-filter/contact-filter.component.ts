import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter()

  constructor(private contactService: ContactService) { }

  filterBy = {term: ''}
  subscription: Subscription

  ngOnInit(): void {
    
    
  }

}
