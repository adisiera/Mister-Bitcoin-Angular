import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
  user: User = null;
  rate: any;
  subscription: Subscription
  ngOnInit(): void {
    this.loadUser()
    this.loadRate()
  }

  loadUser() {
    this.user = this.userService.getUser()
  }

  loadRate(){
    this.subscription = this.bitcoinService.getRate(this.user.coins).subscribe(rate => {
      this.rate = rate
    })
  }
}
