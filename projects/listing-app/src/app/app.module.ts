import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ListingModule} from 'listing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
// import {}
// import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import{DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDataComponent } from './add-data/add-data.component';
import { DatalistComponent } from './datalist/datalist.component';
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    DatalistComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    ListingModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
