import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { card } from '../interface/sidenav';
import { ticketTypes } from '../Utlis/cardObject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sidenavtoggle:Subject<boolean> = new Subject();
  ticketDetails = ticketTypes

  ticketGroup = new FormGroup({
    ticketArray: new FormArray([]),
    totalAmount: new FormControl(0)
  })


  constructor(private fb:FormBuilder) {
    this.ticketDetails.map((value:card)=>{
      let formgroup = this.fb.group({
        ticketName:[value.ticketName],
        ticketCount:[0],
        ticketAmount:[0]
      });
      (this.ticketGroup.get('ticketArray')as FormArray).push(formgroup)
    })
  }

  totalAmount(){
    setTimeout(() => {
      let data = (this.ticketGroup as FormGroup).get('ticketArray')?.value.reduce((acc: any,obj: any)=> acc + obj.ticketAmount,0)
      this.ticketGroup.get('totalAmount')?.setValue(data);
    });
  }

  sidenav(data:boolean){
    this.sidenavtoggle.next(data)
  }
 

}
