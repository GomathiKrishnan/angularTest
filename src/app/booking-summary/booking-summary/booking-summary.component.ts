import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
  }
  get ticketControls() {
    return (this.commonService.ticketGroup.get('ticketArray') as FormArray)
  }
  convertIntoFormControl(control:any){
    return control as FormControl
  }
  get totalAmount(){
    return this.commonService.ticketGroup.get('totalAmount') as FormControl
  }
}
