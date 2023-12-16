import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})



export class SignupComponent implements OnInit {

  myForm:FormGroup;
  err:string | undefined;
  lang:string = "";
  constructor(
    private _AuthService:AuthService,
    private fb:FormBuilder,
    private router:Router,
    private _ActivatedRoute:ActivatedRoute,
    private _MatDialog:MatDialog
    ){
    this.myForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.lang = this._ActivatedRoute.snapshot.params['lang'];
  }


  submitData() {
    this._AuthService.register(this.myForm.value).subscribe({
      next:(res)=> {
          console.log(res);
          this.err = undefined;
          this.openDialog();
      },
      error:(err)=> {
        console.log(err.error.message)
        this.err = err.error.message;
      }
    })
  }

  openDialog() {
    this._MatDialog.open(MessageComponent, {
      data: {
        message:"success signup"
      },
    }).afterClosed()
    .subscribe({
      next: (res) => {
        this.router.navigate([localStorage.getItem("lang"), 'signin']);
      },
      error: (err) => {},
    });
  }
}






