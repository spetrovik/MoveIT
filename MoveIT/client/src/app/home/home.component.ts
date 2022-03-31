import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
offers:any;
allOffers: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getOffers();
  }
registerToggle(){
  this.registerMode = !this.registerMode;
}
cancelRegisterMode(event: boolean)
{
  this.registerMode = event;
}
getOffers(): void{
  this.http.get('https://localhost:5001/api/offers/offer')
  .subscribe(response => {
    this.offers = response;
    console.log(this.offers);
  }, error => {
    console.log(error);
  })
}
}
