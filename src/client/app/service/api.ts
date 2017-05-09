import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiCall{
	constructor(private http: Http) {}

	login(email: string, password: string): Observable<any> {
		let data = {
			email: email,
			password: password, 
			action: 'login'
		};
		console.log(data);
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/user/', data)
			.map((res: Response) => res.json())
			.catch(this.handleError)
	}

	logout(): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/user/', {action: 'logout'})
			.map((res, Response) => res.json())
			.catch(this.handleError)
	}

	register(form: any): Observable<any> {
		let data = form;
		data.action = 'register'
		console.log(data);
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/user/', data)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	getprofile(): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/user/', {action: 'getprofile'})
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	createorder(form: any): Observable<any> {
		// alert(form.droplocation);
		let data = form;
		data.action='createorder';
		console.log(data);
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/order/', data)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	getservice(data: any): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/getservice/', data)
			.map((res, Response) => res.json())
			.catch(this.handleError)
	}

	getchecklist(data: any): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/getchecklist/', data)
			.map((res, Response) => res.json())
			.catch(this.handleError)
	}

	getorder(data: any): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/order/', data)
			.map((res, Response) => res.json())
			.catch(this.handleError)
	}

	getaddress(data: any): Observable<any> {
		return this.http.post('http://ddbackend-edeveloper3666886.codeanyapp.com/addressbook/', data)
			.map((res, Response) => res.json())
			.catch(this.handleError)
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		alert(errMsg);
		return Observable.throw(errMsg);
	}

}