import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAPIService } from '../../service/login-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userDetails:FormGroup = new FormGroup({})

  constructor(private fb:FormBuilder ,private loginService:LoginAPIService,private router:Router) {
    this.userDetails = this.fb.group({
      name:['',[Validators.minLength(3),Validators.maxLength(50)]],
      email:['',[Validators.email]],
      password:[''],
      confirm_password:['']
    })
   }

  ngOnInit(): void {

  }

  uploadImage(e:any){
    let image = e.target.files[0]

    let fd = new FormData();
    fd.append('profileImage',image,image.name)

    this.loginService.uploadImgae(fd).subscribe((res)=>{
      console.log(res)
    })
  }

  submit(){
    if(this.userDetails.status == 'VALID'){
      this.loginService.registerUser(this.userDetails.value).subscribe((res)=>{
        if(res)
          this.router.navigate(['login'])
      })
    }
  }
}
