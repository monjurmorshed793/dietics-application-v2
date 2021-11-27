import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DieticsManagerAppComponent } from './dietics-manager-app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from "../shared/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DieticsManagerRoutingModule} from "./dietics-manager-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    DieticsManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    DieticsManagerRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class DieticsManagerModule { }
