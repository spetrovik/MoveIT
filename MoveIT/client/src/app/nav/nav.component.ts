import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: boolean;
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
login(){
  this.accountService.login(this.model).subscribe(
    response => {
    console.log(response);
    this.loggedIn = true;
    }, error => console.log(error)
    );
}

logout() {
  this.accountService.logout();
}
getCurrentUser(){
  this.accountService.currentUser$.subscribe(user => {
    this.loggedIn = !!user;
  }, error => {
    console.log(error);
  })
}
}
