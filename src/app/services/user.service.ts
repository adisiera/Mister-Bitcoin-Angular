import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contact.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private gUsers: User[] = [
    {
      _id: '2989427',
      name: 'Puki Ben David',
      coins: 100,
      moves: []
    }
  ]

  getUser():User{
    return this.gUsers[0]
  }
  

}
