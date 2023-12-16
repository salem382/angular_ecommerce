import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../interceptors/loading-interceptor.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MessageComponent } from './components/message/message.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';


@NgModule({
  declarations: [
    SignupComponent,
    SelectLanguageComponent,
    SigninComponent,
    LoadingComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule,
    MatDialogModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  exports:[
    SelectLanguageComponent,
    SignupComponent,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    LoadingComponent,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
})
export class GlobalModule { }


