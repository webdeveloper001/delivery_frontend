import { Directive, Input, DoCheck, OnChanges ,OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions',
})
export class DirectionsMapDirective  implements DoCheck, OnChanges, OnInit {
  @Input() origin: any;
  @Input() destination : any;
  @Input() waypoints: any;

  oldo: any = undefined;
  oldd: any= undefined;

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(map);
      directionsService.route({
        origin: this.origin, 
        destination: this.destination, 
        waypoints: this.waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, (response:any, status: any) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      });

    });
  }
  ngOnChanges() {
    console.log('OnChanges called !?!?!?');
    //throw new Error('ngOnChanges called; should not be when ngDoCheck is defined!');
  }

  // We "know" that the only way the list can change is
  // identity or in length so that's all we check
  ngDoCheck() {

    if(this.oldo == this.origin && this.oldd == this.destination) return;

    
    this.gmapsApi.getNativeMap().then(map => {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(map);
      directionsService.route({
        origin: this.origin, 
        destination: this.destination, 
        waypoints: this.waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, (response:any, status: any) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      });

      this.oldo = this.origin
      this.oldd = this.destination

    });
  }
}