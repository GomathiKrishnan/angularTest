import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {

  rootURL = ' http://192.168.1.163:3000/'
  

  constructor(private httpClient:HttpClient) { }

  login(data: any) {
    let reqUrl = this.rootURL + 'login/user'
    return this.httpClient.post(reqUrl, data).pipe(map((res) => res));
  }

  getuser(){
    let auth = sessionStorage.getItem('auth')
    let reqUrl = this.rootURL + 'user'
    let headers = new HttpHeaders({
      Authorization : "Bearer" + auth
    })
    return this.httpClient.get(reqUrl,{headers:headers}).pipe(map((res)=> res));
  }

  registerUser(data:any){
    let reqUrl = this.rootURL + 'register'
    return this.httpClient.post(reqUrl, data).pipe(map((res) => res));
  }

  uploadImgae(file:any){
    let reqUrl = this.rootURL + 'upload_logo'
    return this.httpClient.post(reqUrl, file).pipe(map((res) => res));

  }
}
