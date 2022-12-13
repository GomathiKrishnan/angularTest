import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAPIService } from '../service/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredential:FormGroup = new FormGroup({})

  constructor( private fb:FormBuilder,private login:LoginAPIService,private route:Router) { 
    this.loginCredential = this.fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {

  }

  submit(){
    console.log('called',this.loginCredential)
    if(this.loginCredential.status == 'VALID'){
      console.log('called')
      sessionStorage.setItem('auth','asdsadfsadf');
      this.route.navigate(['/booking'])

      // this.login.login(this.loginCredential.value).subscribe((res:any)=>{
      //   if(res){
      //     sessionStorage.setItem('auth',res.Token);
      //     this.route.navigate(['Booking'])
      //   }
      // })
    }
  }
}
