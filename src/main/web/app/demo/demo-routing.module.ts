import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InitialComponent} from "./initial/initial.component";
import {FlexboxComponent} from "./flexbox/flexbox.component";

const routes: Routes = [
  {
    path: 'demo-main',
    component: InitialComponent
  },
  {
    path: 'flexbox',
    component: FlexboxComponent
  },
  {
    path: '**',
    redirectTo: 'demo-main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
