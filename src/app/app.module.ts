import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {RouterModule} from '@angular/router';
import {RegistrationService} from './registration-page/registration.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {AuthPageService} from './auth-page/auth-page.service';
import { AdminUndecidedUserPageComponent } from './admin-undecided-user-page/admin-undecided-user-page.component';
import {AdminServiceService} from './admin-service.service';
import { FoodComponentComponent } from './food-component/food-component.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import {MenuService} from './menu.service';
import { FoodManagmentComponent } from './food-managment/food-managment.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HospitalPageComponent } from './hospital-page/hospital-page.component';
import { ProrokComponent } from './prorok/prorok.component';
import { RaidPageComponent } from './raid-page/raid-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import {UserService} from './user.service';
import {StatusGuard} from './status.guard';
import { OrderInfoComponent } from './order-info/order-info.component';
import {TopbarComponent} from './topbar/topbar.component';
import { FoodAddComponent } from './food-add/food-add.component';
import {RaidService} from './raid.service';
import {MenuGuard} from './menu.guard';
import {HospitalGuard} from './hospital.guard';
import {RaidGuard} from './raid.guard';
import { RaidAddComponent } from './raid-add/raid-add.component';
import { RaidManageComponent } from './raid-manage/raid-manage.component';
import { RaidEditComponent } from './raid-edit/raid-edit.component';
import { RaidListComponent } from './raid-list/raid-list.component';

const routes = [
  {path: 'registration', component: RegistrationPageComponent},
  {path: '', component: AuthPageComponent},
  {path: 'undecidedUsers', component: AdminUndecidedUserPageComponent},
  {path: 'main', canActivate: [StatusGuard], component: TopbarComponent,
  children: [
    {path: 'menu/component', canActivate: [StatusGuard], component: FoodComponentComponent},
    {path: 'menu/edit', canActivate: [MenuGuard], component: FoodEditComponent},
    {path: 'menu', canActivate: [StatusGuard], component: FoodListComponent},
    {path: 'menu/manage', canActivate: [MenuGuard], component: FoodManagmentComponent},
    {path: '', canActivate: [StatusGuard], component: MainPageComponent},
    {path: 'acc', canActivate: [StatusGuard], component: AccountPageComponent},
    {path: 'news', canActivate: [StatusGuard], component: ProrokComponent},
    {path: 'hospital', canActivate: [StatusGuard], component: HospitalPageComponent},
    {path: 'raids', canActivate: [StatusGuard], component: RaidPageComponent},
    {path: 'menu/add', canActivate: [MenuGuard], component: FoodAddComponent},
    {path: 'menu/orders', canActivate: [MenuGuard], component: OrderInfoComponent},
    {path: 'raids/add', canActivate: [RaidGuard], component: RaidAddComponent},
    {path: 'raids/manage', canActivate: [RaidGuard], component: RaidManageComponent},
    {path: 'raids/list', canActivate: [RaidGuard], component: RaidListComponent},
    {path: 'raids/edit', canActivate: [RaidGuard], component: RaidEditComponent}
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RegistrationPageComponent,
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
    FoodAddComponent,
    RaidAddComponent,
    RaidManageComponent,
    RaidEditComponent,
    RaidListComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserModule,
    RouterModule.forRoot(routes), HttpClientModule , FormsModule,
  ],
  providers: [RegistrationService, AuthPageService, AdminServiceService, MenuService, UserService, StatusGuard,
    RaidService, MenuGuard, HospitalGuard, RaidGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
