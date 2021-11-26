import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { InitialComponent } from './initial/initial.component';
import {MaterialModule} from "../shared/material.module";
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InitialComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class DemoModule { }
