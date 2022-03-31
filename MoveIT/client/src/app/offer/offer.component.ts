import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Offer } from '../_models/offer';
import { User } from '../_models/user';
import { CalculatePriceService } from '../_services/calculate-price.service';


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
  distance: any;
  offersByUser: any;
  estimatedPrice: any;
  numberOfOffer: any;
  user:User;
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
   // this.getUser();
    this.getOffers();
    this.livingArea = this.offerForm.value.livingArea;
    this.atticArea = this.offerForm.value.atticArea;
    this.from = this.offerForm.value.from;
    this.to = this.offerForm.value.to;
    const offer: Offer = JSON.parse(localStorage.getItem('offer'));
    this.estimatedPrice = offer.priceDistance;
    this.numberOfOffer = offer.id;
    
  } 
  getUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.http.get('https://localhost:5001/api/users/' + user.userID)
    .subscribe(response => {
      localStorage.setItem('user', JSON.stringify(user));
      this.data = response;
    }, error => {
      console.log(error);
    });
  }
  getOffers(): void{
    this.user = JSON.parse(localStorage.getItem('user'));
    this.http.get('https://localhost:5001/api/offers/offerDetail/' + this.user.userID)
    .subscribe(response => {
      this.offersByUser = response;
      localStorage.setItem('offer', JSON.stringify(response));
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
    });
   }
  }

