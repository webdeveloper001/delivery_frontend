import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin: any;
  @Input() destination : any;
  @Input() waypoints: any;

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
}