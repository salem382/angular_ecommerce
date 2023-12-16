import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class LanguageService  {

  currentLang: BehaviorSubject<string>;

  constructor(
    private  _TranslateService:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {
    this.currentLang = new BehaviorSubject<string>("en");
  }

  setCurrentLang (language:string, init:boolean = false) {


    if (language == "en" || language == "ar") {

      this._TranslateService.use(language);
      localStorage.setItem("lang", language);
      let htmlTag = this.document.getElementsByTagName(
        'html'
      )[0] as HTMLHtmlElement;
      htmlTag.dir = language === 'ar' ? 'rtl' : 'ltr';
      htmlTag.lang = language;
      this.currentLang.next(language);

      // let currentUrlSegments = this.router.url.split('/');
      
      // currentUrlSegments[1] = language;
      
      // let newUrl = currentUrlSegments.join('/');
      // if (!init) {
      //   this.router.navigateByUrl(newUrl);
      // }
    }
    else {
      this._TranslateService.use("en");
      localStorage.setItem("lang", "en");
    }
  }


}

