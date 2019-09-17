 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDataComponent} from './add-data/add-data.component';
import {DatalistComponent} from './datalist/datalist.component';
const routes: Routes = [
  { path: "", component:DatalistComponent},
  { path: "adddata", component:AddDataComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }