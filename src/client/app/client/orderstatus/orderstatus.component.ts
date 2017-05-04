import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
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

	waypoints: any = [
		{
			location: "3.100094, 101.686844", 
			stopover: false
		},
		{
			location: "3.101405, 101.685121",
			stopover: false
		}
		
	]

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
	
}
