import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer.component';
import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    SharedModule
  ],
  exports: [
    DisclaimerComponent
  ]
})
export class DisclaimerModule { }
