import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent { 
	loggedin = eval(localStorage.getItem('Auth'));

	isAuthenticated() {
		let auth = eval(localStorage.getItem('Auth'));
		if (auth == true) return true;
		return false;
	}
}

