import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { VariableService } from './../service/VariableService'
import { ApiCall } from '../../service/api'; 
import { Router } from '@angular/router';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'dd-client-orderstatus',
  templateUrl: 'orderstatus.component.html',
  styleUrls: ['orderstatus.component.css']
})
export class OrderStatusComponent{  
	lat: number = 3.095749;
	lng: number = 101.686047;	

	origin: any = "3.095749, 101.686047"
	destination: any = "3.103003,101.682337"

	waypoints: any = [ ]

  return_data = [ 
  {
  	'location': {
  		'lat': 3.095749, 
		'lon': 101.686047
  	} 
  }, {
  	'location': {
  		'lat': 3.100094, 
  		'lon': 101.686844
  	}

  }, {
  	'location': {
  		'lat': 3.101405, 
  		'lon': 101.685121
  	}

  }, {
  	'location': {
  		'lat': 3.103003, 
  		'lon': 101.682337
  	}

  } ]; 

  cur: any = {
    order: {
      id: 0,
      status: 0, 
      docs: []
    }, 
  }
	
  constructor(private api: ApiCall, private router: Router, private global: VariableService){ 
    api.getorder({'action': 'getorder', 'id': -1}).subscribe((res)=> {
      console.log(res);
      this.cur = res;

      this.origin = res.order.pick_up_location
      this.destination = res.order.drop_location
      this.waypoints = []
      for(var i = 0; i < res.tracks.length; i ++) {
        this.waypoints[this.waypoints.length] = {
          location: res.tracks[i].location, 
          stopover: true
        }
      }
      console.log(this);
    });
  }

}
