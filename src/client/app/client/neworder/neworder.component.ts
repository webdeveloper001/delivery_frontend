import { Component, ViewChild } from '@angular/core';
import { VariableService } from './../service/VariableService'
import { ApiCall } from '../../service/api'; 
import { Router } from '@angular/router';
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
	// ordertypes: any = [
	// 	{ 
	// 		'value': '1', 
	// 		'text': 'Document'
	// 	}, {
	// 		'value': '1', 
	// 		'text': 'Filing'
	// 	}
		
	// ]; 


	@ViewChild("pick_up_state_selector") pick_up_state_selector : any;

	constructor(private api: ApiCall, private router: Router, private global: VariableService){ 
		this.user = this.global.getUser();
		this.api.getservice({parent: -1}).subscribe((res) => {
			console.log(res);
			this.ordertypes = res;
			this.ordertype = this.ordertypes['services']['id'];
		});
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
			pickup: form.pickupaddress + ' ' + form.pickupstate + ' ' + form.pickpost, 
			drop: form.dropaddress + ' ' + form.dropstate + ' ' + form.droppost, 
			type: form.ordertype == undefined? 'None': form.ordertype, 
			dropemail: form.dropemail, 
			documents: this.documents
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

}
