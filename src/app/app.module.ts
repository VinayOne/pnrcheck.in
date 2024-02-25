import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GoogleTagManagerService } from "angular-google-tag-manager";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: 'GTM-P8ZNK9B2' },
    GoogleTagManagerService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
