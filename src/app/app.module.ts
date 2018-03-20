import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {RouterModule} from '@angular/router';
import {RegistrationService} from "./registration-page/registration.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RegistrationAnswerComponent } from './registration-answer/registration-answer.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {AuthPageService} from "./auth-page/auth-page.service";
import { AdminUndecidedUserPageComponent } from './admin-undecided-user-page/admin-undecided-user-page.component';
import {AdminServiceService} from "./admin-service.service";
import { FoodComponentComponent } from './food-component/food-component.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import {MenuService} from "./menu.service";
import { FoodManagmentComponent } from './food-managment/food-managment.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HospitalPageComponent } from './hospital-page/hospital-page.component';
import { ProrokComponent } from './prorok/prorok.component';
import { RaidPageComponent } from './raid-page/raid-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import {UserService} from "./user.service";
import {StatusGuard} from "./status.guard";
import { OrderInfoComponent } from './order-info/order-info.component';
import { FoodAddComponent } from './food-add/food-add.component';

const routes = [
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'regInfo', component: RegistrationAnswerComponent},
  {path: 'auth', component: AuthPageComponent},
  {path: 'undecidedUsers', component: AdminUndecidedUserPageComponent},
  {path: 'menu/component', canActivate: [StatusGuard], component: FoodComponentComponent},
  {path: 'menu/edit', canActivate: [StatusGuard], component: FoodEditComponent},
  {path: 'menu', canActivate: [StatusGuard], component: FoodListComponent},
  {path: 'menu/manage', component: FoodManagmentComponent},
  {path: '', component: MainPageComponent},
  {path: 'acc', canActivate: [StatusGuard], component: AccountPageComponent},
  {path: 'news', canActivate: [StatusGuard], component: ProrokComponent},
  {path: 'hospital', canActivate: [StatusGuard], component: HospitalPageComponent},
  {path: 'raids', canActivate: [StatusGuard], component: RaidPageComponent},
  {path: 'menu/add', canActivate: [StatusGuard], component: FoodAddComponent},
  {path: 'menu/orders',canActivate: [StatusGuard], component: OrderInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    RegistrationAnswerComponent,
    AuthPageComponent,
    AdminUndecidedUserPageComponent,
    FoodComponentComponent,
    FoodEditComponent,
    FoodListComponent,
    FoodManagmentComponent,
    MainPageComponent,
    HospitalPageComponent,
    ProrokComponent,
    RaidPageComponent,
    AccountPageComponent,
    OrderInfoComponent,
    FoodAddComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserModule,
    RouterModule.forRoot(routes), HttpClientModule , FormsModule,
  ],
  providers: [RegistrationService, AuthPageService, AdminServiceService, MenuService, UserService, StatusGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule {
}
