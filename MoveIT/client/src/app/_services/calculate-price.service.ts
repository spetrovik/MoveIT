import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Offer } from '../_models/offer';
import { User } from '../_models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatePriceService {


  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  calculatePrice(model: Offer){
    if(model.distance < 50)
    {
     model.priceDistance = 1000 + 10 * model.distance;
    }
    if(model.distance > 50 && model.distance < 100)
    {
      model.priceDistance = 5000 + 8 * model.distance
    }
    if(model.distance > 100)
    {
      model.priceDistance = 10000 + 7 * model.distance
    }
  }

  offer(model: any) {
    return this.http.post(this.baseUrl + 'offer/offers', model).
    pipe(map((response: Offer) => {
      const offer = response;
      this.calculatePrice(model);
      offer.priceDistance = model.priceDistance;
      if(offer){
        localStorage.setItem('offer', JSON.stringify(offer));
      //  this.currentUserSource.next(user);
      console.log(offer);
      }
    }))
   }
}
