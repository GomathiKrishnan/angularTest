import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';

const routes: Routes = [
  {
    path: '',
    component: BookingSummaryComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
})
export class BookingSummaryRoutingModule {}
