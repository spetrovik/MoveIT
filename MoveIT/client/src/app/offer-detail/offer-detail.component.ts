import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Offer } from '../_models/offer';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
@Input() livingArea : any;
@Input() atticArea : any;
@Input() from : any;
@Input() to : any;
@Input() distance : any;
@Input() estimatedPrice: any;
@Input() numberOfOffer: any;
data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  //  this.getOfferByID();
    const offer: Offer = JSON.parse(localStorage.getItem('offer'));
    this.livingArea = offer.livingArea;
    this.atticArea = offer.atticArea;
    this.from = offer.from;
    this.to = offer.to;
    this.distance = offer.distance;
    this.estimatedPrice = offer.priceDistance;
    this.numberOfOffer = offer.id;
  }
  getOfferByID(): void{
    const offer: Offer = JSON.parse(localStorage.getItem('offer'));
    this.http.get('https://localhost:5001/api/offers/' + offer.id)
    .subscribe(response => {
      this.data = response;
    }, error => {
      console.log(error);
    });
  }
}
