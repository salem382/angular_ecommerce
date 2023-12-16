import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { UserData } from 'src/app/global/models/userData.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(
    private Api:ApiService,
    private _Router:Router    
    ) { }

  loginError = new BehaviorSubject<string>("")
  token:string = "";
  userData:UserData | undefined;

  register(data:any):Observable<any>{
    return this.Api.post('auth/signup', data);
  }

  authenticate(data:any):void {

    this.Api.post('auth/signin', data).subscribe({
      next:(res:any)=> {
        this.token = res.token; 
        localStorage.setItem("userToken", res.token);
       
        let decoded:UserData = jwtDecode(res.token);
        this.userData = decoded;
        localStorage.setItem("role", decoded.role);

        if (decoded.role == "admin") {
            
          this._Router.navigate([localStorage.getItem('lang'),
          'admin',
          'dashboard']);
        }
        else {
          //navigateto to website
        }
      },
      error:(err)=> {
        this.loginError.next(err.error.message); 
      }
    }) 
  }

  autologin() {
    
    let role = localStorage.getItem("role");
    let token = localStorage.getItem("userToken");
    if(role == "admin") {
      this._Router.navigate([localStorage.getItem('lang'),
      'admin',
      'dashboard']);
    }
  }

}


