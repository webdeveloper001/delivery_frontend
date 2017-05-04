import { Component } from '@angular/core';
import { VariableService } from './service/VariableService'
import { ApiCall } from '../service/api'
import { Router } from '@angular/router';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'dd-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent { 
 
  constructor(private api: ApiCall, private router: Router, private global: VariableService){ 
  	this.api.getprofile().subscribe((res) => {
  		console.log(res);
  		if(res['status'] == 'success') {
  			let user:any = {
  				email 	 : res['email'],
  				username : res['username'],
  				phone 	 : res['phone'],
          address  : res['address'], 
  				location : res['location']	
  			}	
  			this.global.setUser(user);
        localStorage.setItem('Auth', "true");
  		} else {
  			this.router.navigateByUrl('/login')
  		}
  	}); 
  }

}
