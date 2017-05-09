import { Component, ViewChild } from '@angular/core';
import { VariableService } from './../service/VariableService'
import { ApiCall } from '../../service/api'; 
import { Router } from '@angular/router';
declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'dd-client-addressbook',
  templateUrl: 'addressbook.component.html',
  styleUrls: ['addressbook.component.css']
})
export class AddressBookComponent { 
	companies: any = [];
	cpname: string;
	cpaddress: string;
	cpcity: string;
	cppostcode: string;
	cpstate: string;
	cpcountry: string;

	constructor(private api: ApiCall, private router: Router, private global: VariableService){  }
}
