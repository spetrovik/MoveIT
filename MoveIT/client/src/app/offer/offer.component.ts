import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { from } from 'rxjs';
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

  constructor(private calculatePrice : CalculatePriceService) { }
  ngOnInit(): void {
    this.initializeForm();
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

  offer(){
   // this.initializeForm();
    this.calculatePrice.offer(this.offerForm.value).subscribe(response => {
      const data = response;
      console.log(data);
  //    this.router.navigateByUrl('/offers');
   //  this.cancel();
  //  }, error => {
   //  console.log(error);
    });
   }
}
