import { Component } from '@angular/core';
import { ApiCall } from '../service/api'; 
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'dd-login',
  templateUrl: 'authlogin.component.html',
  styleUrls: ['auth.component.css']
})
export class LoginComponent {
  signoffice: string = 'Login in With Office'
  sign365:string = "Login in With 365"

  constructor(private api: ApiCall, private router: Router){ }

  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
	this.api.login(form.email, form.password).subscribe((res) => {
    console.log(res)
		if(res.status == 'success')
      localStorage.setItem('Auth', "true");
			this.router.navigateByUrl('/client')
  	});
  }
}

@Component({
  moduleId: module.id, 
  selector: 'dd-register', 
  templateUrl: 'authregister.component.html', 
  styleUrls: ['auth.component.css']
})
export class RegisterComponent { 
	constructor(private api: ApiCall, private router: Router) { }

  err_msg:string = '';

	onSubmit(form: any): void {
    if (form.password != form.password2) {
      this.err_msg = 'Password doesn\'t match';
      return;
    }
		console.log('submitted value:', form);
		this.api.register(form).subscribe((res) => {
			console.log(res)
			if(res['status'] == 'success')
				this.router.navigate(['/login']);
      else
        this.err_msg = res['message'];
		});
	}
}

@Component({
  moduleId: module.id, 
  selector: 'dd-logout', 
  template: '<div> logout </div>', 
})
export class LogoutComponent {
  constructor(private api: ApiCall, private router: Router) {
    this.api.logout().subscribe((res) => {
      localStorage.setItem('Auth', "false");
      console.log(res);
      this.router.navigateByUrl('/')
    });
  }

}
