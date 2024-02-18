import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { ResultComponent } from '../home/result/result.component';
import { LoaderComponent } from '../home/loader/loader.component';
import { ServicesComponent } from '../home/services/services.component';
import { PnrinfoComponent } from '../home/pnrinfo/pnrinfo.component';
import { CommonService } from './common.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    LoaderComponent,
    ServicesComponent,
    PnrinfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    LoaderComponent,
    ServicesComponent,
    PnrinfoComponent
  ],
  providers: [
    CommonService
  ]
})
export class SharedModule { }
