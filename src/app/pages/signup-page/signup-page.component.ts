import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  
  constructor(private userService: UserService, private router: Router ) { }
  username: string = ''
  ngOnInit(): void {
  
  }
  onSubmit(){
    this.userService.signup(this.username)
    this.router.navigateByUrl('/')
  }

}
