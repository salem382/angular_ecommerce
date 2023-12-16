import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {
  lang:string = "";

  constructor (private _LanguageService:LanguageService) {

  }

  ngOnInit(): void {

      this._LanguageService.currentLang.subscribe({
        next:()=> {
          this.lang = this._LanguageService.currentLang.getValue();
        }
      })
  }

  selectLang(e:any) {
    this._LanguageService.setCurrentLang(e.target.value)
  }


}
