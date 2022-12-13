import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingSummaryModule } from '../booking-summary/booking-summary.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  exports:[
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class SharedModule { }
