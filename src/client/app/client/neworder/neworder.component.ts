import { Component, ViewChild } from '@angular/core';
import { VariableService } from './../service/VariableService'
import { ApiCall } from '../../service/api'; 
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

	documents: any = [];
	docname: any;
	docdescription: any;
	docquantity: any;
	doccnt: number = 0;

	qrurl: string;

	countrylist: any = ['Malaysia'];
	states : any = {
		'Malaysia': ['Kuala Lumpur','Johor','Kedah','Kelantan','Labuan','Melaka','Negeri Sembilan','Pahang','Perak','Perlis','Pulau Pinang','Putrajaya','Sabah','Sarawak','Selangor','Terengganu','Wilayah Persekutuan'] 
	};
	ordertypes: any = [
		{ 
			'value': '1', 
			'text': 'Document'
		}, {
			'value': '1', 
			'text': 'Filing'
		}
		
	]; 

	@ViewChild("pick_up_state_selector") pick_up_state_selector : any;

	constructor(private api: ApiCall, private global: VariableService){ 
		this.user = this.global.getUser();
	}

	adddoc(): void {
		this.documents.push({
			'id': this.doccnt, 
			'name': this.docname, 
			'description': this.docdescription, 
			'qty': this.docquantity
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

	ngAfterViewInit() {
		$(this.pick_up_state_selector.nativeElement).change((event:any) => {
			console.log(this.pickupstate);
		}); 
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
			this.qrurl = res['qrcode'];
			console.log(res);
		});
	}

}
