import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {RouterModule} from '@angular/router';
import {RegistrationService} from "./registration-page/registration.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material";
import { RegistrationAnswerComponent } from './registration-answer/registration-answer.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {AuthPageService} from "./auth-page/auth-page.service";

const routes = [
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'regInfo', component: RegistrationAnswerComponent},
  {path: 'auth', component: AuthPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    RegistrationAnswerComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserModule,
    RouterModule.forRoot(routes), HttpClientModule , FormsModule
  ],
  providers: [RegistrationService, AuthPageService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
