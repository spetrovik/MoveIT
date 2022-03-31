import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'offers', component: OfferComponent},
  //{path: 'offers/:id', component: OfferDetailComponent},
  {path: 'detail', component: OfferDetailComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
