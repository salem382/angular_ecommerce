import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MessageComponent } from '../message/message.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  myFrom:FormGroup;
  err:string = "";
  constructor(
    private fb:FormBuilder,
     private _AuthService:AuthService,
     private _MatDialog:MatDialog 
    ) {
    this.myFrom = this.fb.group({
      email:[''],
      password:['']
    })
  }

  submit():void {
    this._AuthService.authenticate(this.myFrom.value);
  }

  openDialog() {
    this._MatDialog.open(MessageComponent, {
      data: {
        message:"success signup"
      },
    })
  }
}



