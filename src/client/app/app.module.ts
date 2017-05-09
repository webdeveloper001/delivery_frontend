import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
// import { MdProgressCircleModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';

import { MdTooltipModule } from '@angular/material';


import { LoginComponent } from '../app/auth/auth.component'; 
import { LogoutComponent } from '../app/auth/auth.component'; 
import { RegisterComponent } from '../app/auth/auth.component'; 

import { ProfileComponent } from '../app/client/profile/profile.component'; 
import { NewOrderComponent } from '../app/client/neworder/neworder.component'; 
import { OrderListComponent } from '../app/client/orderlist/orderlist.component'; 
import { OrderStatusComponent } from '../app/client/orderstatus/orderstatus.component'; 
import { DashboardComponent } from '../app/client/dashboard/dashboard.component'; 
import { AddressBookComponent } from '../app/client/addressbook/addressbook.component';

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
    BrowserAnimationsModule, 
    MaterialModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdTooltipModule,
    FormsModule, 
    ReactiveFormsModule
   ],
  declarations: [
  	AppComponent,
  	LoginComponent, 
    LogoutComponent, 
    RegisterComponent, 
    ProfileComponent, 
    NewOrderComponent, 
    OrderListComponent, 
    DashboardComponent, 
    AddressBookComponent
  	],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  ApiCall],
  bootstrap: [AppComponent]

})
export class AppModule { }
