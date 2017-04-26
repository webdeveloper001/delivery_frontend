import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ProfileComponent } from './profile/profile.component';
import { NewOrderComponent } from './neworder/neworder.component'; 
import { OrderListComponent } from './orderlist/orderlist.component'; 
import { OrderStatusComponent } from './orderstatus/orderstatus.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 


@NgModule({
  imports: [
    RouterModule.forChild([
      { 
      	path: 'client', 
      	component: ClientComponent,
      	children: [ {
          path: '', 
          component: DashboardComponent
        }, {
      		path: 'profile', 
      		component: ProfileComponent
      	}, {
          path: 'neworder', 
          component: NewOrderComponent
        }, {
          path: 'orderlist', 
          component: OrderListComponent
        }, {
          path: 'orderstatus', 
          component: OrderStatusComponent
        }]
  	  }

    ])
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
