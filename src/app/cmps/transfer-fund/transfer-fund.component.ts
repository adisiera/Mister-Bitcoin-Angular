import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from 'src/app/model/contact.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
@Input()  contact: Contact;
  constructor(private userService: UserService, private router: Router) { }


  amount: number

  ngOnInit(): void {
  }

  onTransferCoins(){
    if (!this.amount) return 
    this.userService.addMove(this.contact, this.amount)
    this.router.navigate([''])
  }


}
