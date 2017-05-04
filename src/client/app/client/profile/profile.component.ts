import { Component } from '@angular/core';
import { VariableService } from './../service/VariableService'

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'dd-client-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {  
  user: any;
  constructor(private global: VariableService){ 
    this.user = this.global.getUser();
    console.log("________________________________________________________"); 
    console.log(this.user.email);
    console.log("________________________________________________________"); 
  }
}
