import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component'
import { ClientRoutingModule } from './client-routing.module'
import { MdSidenavModule } from '@angular/material';
import { VariableService } from './service/VariableService'
import { ApiCall } from '../service/api';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { OrderStatusComponent } from './orderstatus/orderstatus.component'
import { DirectionsMapDirective } from './directions.map.directive';

@NgModule({
  imports: [CommonModule, ClientRoutingModule, MdSidenavModule, AgmCoreModule.forRoot({
  	apiKey: 'AIzaSyBy_3tnA0WQODkCgel-6ts3hFQSI2Egu08'
  }) ],
  declarations: [ClientComponent, OrderStatusComponent, DirectionsMapDirective], 
  providers: [VariableService, ApiCall],
  exports: [ClientComponent]
})
export class ClientModule { }
