import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { card } from '../../interface/sidenav';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() ticketType:any
  @Input() ticketDetail!:card

  constructor( private commonService:CommonService) { }
  
  get ticketCount() {
    return (this.ticketType as FormGroup).get('ticketCount') as FormControl
  }
  get ticketAmount() {
    return (this.ticketType as FormGroup).get('ticketAmount') as FormControl
  }

  ngOnInit(): void {
    this.ticketCount.valueChanges.subscribe((res:number | null)=>{
      if(res && (res > 30 || res < 0)) 
        this.ticketCount.setValue(0);

      this.commonService.totalAmount();
      
      (this.ticketAmount as FormControl).setValue(this.ticketCount.value * this.ticketDetail.amount);
    })
  } 
  
  numericOnly(event:any): boolean { 
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false
    }
    return true;
  }

  counter(value:number){
    switch (value) {
      case 0:
        this.ticketCount.setValue(this.ticketCount.value - 1)
        break;
      case 1:
        this.ticketCount.setValue(this.ticketCount.value + 1)
        break;
    }
  }
  
}
