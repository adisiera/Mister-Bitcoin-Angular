import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Move } from '../model/move.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user: User = null
  gMoves: []
  getUser() {
    const user = localStorage.getItem('user')
    if (!user) return 
    this.user = JSON.parse(user)
    return this.user
  }

  signup(name) {
    const user = new User()
    user.name = name
    user.setId()
    this.user = user
    this._saveUser()
  }

  public getEmptyUser() {
    return {
      _id: '',
      name: '',
      coins: 100,
      moves: []
    }
  }

  public addMove(contact,amount){
    console.log('contact',contact);
    console.log('amount',amount);
    const move = new Move()
    move.amount = amount
    move.toId = contact._id
    move.to = contact.name
    const moves = [move, ...this.user.moves]
    const user = {...this.user, moves}
    user.coins -= amount
    this.user = user
    this._saveUser()
    this._saveMove()
    return user 
  }

  private _saveUser() {
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  private _saveMove(){
    localStorage.setItem('move', JSON.stringify(this.gMoves))
  }

}
