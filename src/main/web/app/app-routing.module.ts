import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {KeycloakAuthGuard} from "keycloak-angular";
import {AuthGuardService} from "./security/auth-guard.service";
import {DemoRoutingModule} from "./demo/demo-routing.module";
import {InitialComponent} from "./demo/initial/initial.component";
import {DieticsManagerModule} from "./dieticsmanager/dietics-manager.module";
import {RoleConfirmationComponent} from "./role-confirmation/role-confirmation.component";

const routes: Routes = [
  {
    path:'demo',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./demo/demo.module').then(m=> m.DemoModule)
  },
  {
    path: 'role-confirmation',
    canActivate: [AuthGuardService],
    component: RoleConfirmationComponent
  },
  {
    path: 'dieticsmanager',
    canActivate: [AuthGuardService],
    loadChildren: ()=> import('./dieticsmanager/dietics-manager.module').then(m=> m.DieticsManagerModule)
  },
  {
    path: '**',
    redirectTo: 'dieticsmanager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
