import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { LoginAPIService } from '../service/login-api.service';
import { ticketTypes } from '../Utlis/cardObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ticketDetails = ticketTypes;
  ticketControls!:FormGroup;

  @ViewChild('drawer') sidenav!:MatDrawer;

  constructor (private commonService:CommonService ,private loginService:LoginAPIService,private router:Router) {}
  
  ngOnInit(){
    this.ticketControls = this.commonService.ticketGroup

    this.commonService.sidenavtoggle.subscribe((res:boolean)=>{
      this.sidenav.toggle()
    })
    this.loginService.getuser().subscribe((res)=>{
      console.log(res)
    })
  }
  get ticketArrayControls(){
    return (this.ticketControls?.get('ticketArray')as FormArray).controls
  }
}
