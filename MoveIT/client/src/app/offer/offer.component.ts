import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../_models/user';
import { CalculatePriceService } from '../_services/calculate-price.service';

declare global {
    interface Window {
        google: typeof google;
    }
}
export type Coordinate = {
  lat: number;
  lon: number;
};

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offerForm: FormGroup;
  livingArea:any;
  atticArea: any;
  from:any;
  to:any;
  data: any
  offersByUser: any
  baseUrl = 'https://localhost:5001/api/';
  constructor(private calculatePrice : CalculatePriceService,  private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.initializeForm();
    this.getOffers();
  }

  initializeForm(){
    this.offerForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', [Validators.required]),
      livingArea: new FormControl('', Validators.required),
      atticArea: new FormControl('', [Validators.required]),
      distance: new FormControl('', [Validators.required])
    })
  }
  getModelOffer(){
    this.livingArea = this.offerForm.value.livingArea;
    this.atticArea = this.offerForm.value.atticArea;
    this.from = this.offerForm.value.from;
    this.to = this.offerForm.value.to;
    this.getOffers();
  } 
  getOffers(): void{
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.http.get('https://localhost:5001/api/offers/offerDetail/' + user.userID)
    .subscribe(response => {
      this.offersByUser = response;
     // console.log(this.offers);
    }, error => {
      console.log(error);
    });
  }
  offer(){
   // this.initializeForm();
    this.calculatePrice.offer(this.offerForm.value).subscribe(response => {
     
      this.data = response;
      console.log(this.data);
      this.getModelOffer();
  //    this.router.navigateByUrl('/offerDetails');
  //    this.router.navigateByUrl('/offers');
   //  this.cancel();
  //  }, error => {
   //  console.log(error);
    });
   }
  }

