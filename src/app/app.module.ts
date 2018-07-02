import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarService } from './shared/car/car.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "./services/auth.service";
import { GiphyService } from './shared/giphy/giphy.service';
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import { CarEditComponent } from './car-edit/car-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from "./app.routing";
//import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,    
    CarListComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    //FacebookModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [CarService,GiphyService,AuthService,AccountService,UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
