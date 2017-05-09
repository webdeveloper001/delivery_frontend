import { Component, ViewChild } from '@angular/core';
import { VariableService } from './../service/VariableService'
import { ApiCall } from '../../service/api'; 
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MdAutocompleteModule } from '@angular/material';
declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'dd-client-neworder',
  templateUrl: 'neworder.component.html',
  styleUrls: ['neworder.component.css']
})
export class NewOrderComponent { 
	user: any;
	
	pickupaddress: string;
	pickuppost: string;
	pickupstate: string;

	dropaddress: string;
	droppost: string;
	dropstate: string;
	dropemail: string;
	dropcompany: string;
	dropcountry: string;
	tp_company: string;

	ordertype: any;
	subordertype: any;
	prechecklist: any = [];

	documents: any = [];

	docname: any;
	docdescription: any;
	docquantity: number = 1;
	doccnt: number = 0;
	docunit: number = 1;

	qrurl: string;

	done: boolean = false;

	companies = ['A'];

	companyCtrl: FormControl ;
	filteredCompanies: any;

	countrylist: any = ['Malaysia'];
	states : any = {
		'Malaysia': ['Kuala Lumpur','Johor','Kedah','Kelantan','Labuan','Melaka','Negeri Sembilan','Pahang','Perak','Perlis','Pulau Pinang','Putrajaya','Sabah','Sarawak','Selangor','Terengganu','Wilayah Persekutuan'] 
	};
	ordertypes:any = [
		{
			services: []
		}
	];
	subordertypes:any = [
		{
			services: []
		}
	];

	items:any = [];


	@ViewChild("pick_up_state_selector") pick_up_state_selector : any;

	constructor(private api: ApiCall, private router: Router, private global: VariableService){ 
		this.user = this.global.getUser();
		this.api.getservice({parent: -1}).subscribe((res) => {
			console.log(res);
			this.ordertypes = res;
			this.ordertype = this.ordertypes['services']['id'];
		});
	    this.companyCtrl = new FormControl();
	    this.api.getaddress({action: 'getautocomplete'}).subscribe((res) => {
	    	console.log(res);
	    	this.companies = res['data'];
		    this.filteredCompanies = this.companyCtrl.valueChanges
		        .startWith(null)
		        .map(name => this.filterCompanies(name));
	    });
	    console.log(this.user);
	}

	filterCompanies(val: string) {

		let ret = val ? this.companies.filter(item => new RegExp(`^${val}`, 'gi').test(item.name)) : this.companies
		console.log(ret);
		if(ret.length >= 1) {
			this.tp_company = ret[0]
		}
		if(ret.length == 0 && val == this.tp_company.name) {
			this.dropaddress = this.tp_company.address;
			this.dropemail = this.tp_company.email;
			this.droppost = this.tp_company.postcode;
			this.dropstate = this.tp_company.state;
			this.dropcountry = this.tp_company.country;
			this.dropemail = this.tp_company.email;
		}
		return ret;
	}

	adddoc(): void {
		this.documents.push({
			'id': this.doccnt, 
			'name': this.docname, 
			'description': this.docdescription, 
			'qty': this.docquantity, 
			'unit': this.docunit
		})

		this.doccnt ++;
		this.docname = '';
		this.docdescription = '';
		this.docquantity = 0;
	}

	deldoc(doc: any){
		this.documents = this.documents.filter((d:any ) => {
			return d.id != doc.id;
 		})
 		// this.doccnt --;
	}

	loadsub() {
		this.api.getservice({parent: this.ordertype}).subscribe((res) => {
			console.log(res);
			// alert(res);
			this.subordertypes = res;
			try {
				this.subordertype = this.ordertypes['services']['id'];
			} catch(err) {
				console.log(err);
				this.subordertype = null;
			}
		});
		this.api.getchecklist({parent: this.ordertype}).subscribe((res) => {
			console.log(res);
			try {
				this.prechecklist = res['checklist']
			} catch(err) {
				console.log(err);
				this.prechecklist = [];
			}
		});

	}

	ngAfterViewInit() {
		$(this.pick_up_state_selector.nativeElement).change((event:any) => {
			console.log(this.pickupstate);
		}); 
	}

	isSubmitted(): boolean {
		return this.done;
	}

	onSubmit(form: any): void {

		let data = {
			pickup: form.pickupaddress + ' ' + form.pickupstate + ' ' + form.pickuppost, 
			drop: form.dropaddress + ' ' + form.dropstate + ' ' + form.droppost, 
			type: form.ordertype == undefined? 'None': form.ordertype, 
			dropemail: form.dropemail, 
			documents: this.documents.concat(this.prechecklist)
		}; 
		console.log(data);
		this.api.createorder(data).subscribe((res) => {
			if(res['status'] == 'error')
				return;
			this.qrurl = res['qrcode'];
			console.log(res);
			this.done = true;
		});
	}

	print() {
		alert("please connect the printer");
	}

	all_done() {
		console.log("Done");
		this.router.navigateByUrl('/client/orderstatus')
	}

	selected(value: any) {
		console.log(value);
	}

}
