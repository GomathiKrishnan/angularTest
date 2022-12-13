import { NgModule } from '@angular/core';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { BookingSummaryRoutingModule } from './booking-summary.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BookingSummaryComponent,
  ],
  imports: [
    SharedModule,
    BookingSummaryRoutingModule
  ]
})
export class BookingSummaryModule { }
