import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  registerMode: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(model: any) {
   return this.http.post(this.baseUrl + 'account/login', model).
   pipe(map((response: User) => {
     const user = response;
     if(user){
       localStorage.setItem('user', JSON.stringify(user));
       this.currentUserSource.next(user);
       this.router.navigateByUrl('');
     }
   }))
  }
  register(model: any)
  {
    this.registerMode = true;
    return this.http.post(this.baseUrl + 'account/register', model).
    pipe(map((user : User) => {
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    }))
  }
setCurrentUser(user: User){
  this.currentUserSource.next(user);
}
logout(){
  this.registerMode = false;
  localStorage.removeItem('user');
  this.currentUserSource.next(null);
} 
}
