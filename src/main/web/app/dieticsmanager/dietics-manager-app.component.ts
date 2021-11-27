import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dietics-manager-app',
  templateUrl: './dietics-manager-app.component.html',
  styleUrls: ['./dietics-manager-app.component.sass']
})
export class DieticsManagerAppComponent implements OnInit {
  showContents = false;
  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkRequiredRoles();
  }

  checkRequiredRoles(): void{
    const userRoles = this.keycloakService.getUserRoles(true);
    console.log(userRoles);
    console.log(userRoles.indexOf('patient'));
    if(userRoles instanceof Array &&
      (userRoles.indexOf('patient')>=0 || userRoles.indexOf('dietician')>=0 || userRoles.indexOf('admin')>=0)){
      this.showContents = true;
    }else{
      this.showContents = false;
      console.log('show contents-->'+ this.showContents);
      this.router.navigate(['/role-confirmation']);
    }
  }

}
