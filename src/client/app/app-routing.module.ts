import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/auth.component'
import { LogoutComponent } from './auth/auth.component'
import { RegisterComponent } from './auth/auth.component'

@NgModule({
  imports: [
    RouterModule.forRoot([ {
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
   path: 'login', 
       component: LoginComponent
   }, {
     path: 'register', 
     component: RegisterComponent
   }, {
     path: 'logout', 
     component: LogoutComponent
   } ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

