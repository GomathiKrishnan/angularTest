import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.scss']
})
export class EditCartComponent implements OnInit{
  @Input() ticketControls:any
  filteredControls:any
  constructor(private commonService:CommonService) { }

  get totalAmount(){
    return this.commonService.ticketGroup.get('totalAmount') as FormControl
  }

  ngOnInit(): void {
    this.commonService.sidenavtoggle.subscribe(()=>{
      this.filteredControls = this.ticketControls.filter((res:any)=> res.get('ticketCount').value != 0 )
    })
  }
    
  sidenavClose(){
    this.commonService.sidenav(false)
  }
}
