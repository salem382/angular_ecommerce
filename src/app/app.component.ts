import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';
import { AuthService } from './core/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit  {
  
    constructor(private _LanguageService:LanguageService, private _AuthService:AuthService ) {}

    ngOnInit(): void {
     
      const lang = localStorage.getItem('lang');
      if (lang) {
        this._LanguageService.setCurrentLang(lang);
      } else {
        this._LanguageService.setCurrentLang('en');
      }
      this._AuthService.autologin();
    }
}

