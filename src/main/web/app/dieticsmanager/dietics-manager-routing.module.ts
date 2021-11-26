import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InitialComponent} from "../demo/initial/initial.component";
import {FlexboxComponent} from "../demo/flexbox/flexbox.component";
import {DieticsManagerAppComponent} from "./dietics-manager-app.component";
import {MainContentComponent} from "./main-content/main-content.component";

const routes: Routes = [
  {
    path: '',
    component: DieticsManagerAppComponent,
    children: [
      {path: '', component: MainContentComponent}
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DieticsManagerRoutingModule { }
