import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from '../app/auth/auth.component'; 
import { LogoutComponent } from '../app/auth/auth.component'; 
import { RegisterComponent } from '../app/auth/auth.component'; 

import { ProfileComponent } from '../app/client/profile/profile.component'; 
import { NewOrderComponent } from '../app/client/neworder/neworder.component'; 
import { OrderListComponent } from '../app/client/orderlist/orderlist.component'; 
import { OrderStatusComponent } from '../app/client/orderstatus/orderstatus.component'; 
import { DashboardComponent } from '../app/client/dashboard/dashboard.component'; 

import { ClientModule } from '../app/client/client.module'; 

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { ApiCall } from './service/api';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    AboutModule, 
    HomeModule, 
    SharedModule.forRoot(), 
    ClientModule, 
    ],
  declarations: [
  	AppComponent,
  	LoginComponent, 
    LogoutComponent, 
    RegisterComponent, 
    ProfileComponent, 
    NewOrderComponent, 
    OrderListComponent, 
    OrderStatusComponent, 
    DashboardComponent
  	],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  ApiCall],
  bootstrap: [AppComponent]

})
export class AppModule { }
