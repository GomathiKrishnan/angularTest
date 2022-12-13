import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() ticketControl:any

  get totalAmount (){
    return (this.ticketControl as FormGroup).get('totalAmount') as FormControl
  }
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  nextpage(){
    this.router.navigate(['booking/summary'])
  }
}
  