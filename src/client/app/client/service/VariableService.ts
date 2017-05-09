import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VariableService{
	user: any = {
		id: '', 
	  	email: '',
	  	username: '',
	  	phone: '',
	  	location: ''
	};

	constructor() {}

	getUser() {
		return this.user;
	}

	setUser(user:any) {
		this.user = user;
	}

}