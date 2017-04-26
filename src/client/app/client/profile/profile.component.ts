import { Component } from '@angular/core';
import { ApiCall } from '../../service/api'
import { Router } from '@angular/router';

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
  user: any = {
  	email: '',
  	username: '',
  	phone: '',
  	location: ''
  };
  constructor(private api: ApiCall, private router: Router){ 
  	this.api.getprofile().subscribe((res) => {
  		console.log(res);
  		if(res['status'] == 'success') {
  			this.user.email = res['email']
  			this.user.username = res['username']
  			this.user.phone = res['phone']
  			this.user.location = res['location']
  		} else {
  			this.router.navigateByUrl('/login')
  		}
  	}); 
  }
}
