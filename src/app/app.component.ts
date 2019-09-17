
import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { switchMap, map, takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  demodata:any = [];
domainurl = "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/";
token:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgyMDY0MTMsImlhdCI6MTU2ODEyMDAxM30.ZHDuSBY2QoiU8IxBt6f9tq0KNzHMIQ91mJN0m_trL40';

     // use for Download the PDF 

     custom_link: any = [{
      label: 'shatterblok',
      url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
      action: 'null'
  }, {
      label: 'Audiodateline',
      url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
      action: 'null'
  }];



  // use for grab the link
  grab_link: any = [
      {
          col_name: 'grab_url',
          field_name: 'name'
      },
      {
      label: 'shatterblok grab url',
      url: 'artixtxp.com/',
      action: 'null'
  }, {
      label: 'Audiodateline grab url',
      url: 'audiodateline.com/',
      action: 'null'
  }];



   // use for status search

  statusarray: any = [{val: 1, name: 'Approve'}, {val: 4, name: 'Decline'}, {val: 3, name: 'Lock'}]; 

   // use for ststic email search
  //  Example like this
  emailarray: any = [{val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com'}, {val: 'octtest@yopmail.com', name: 'octtest@yopmail.com'}, {val: 'septest@yopmail.com', name: 'septest@yopmail.com'}];

  // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },

  //  Example like this
  editroute: any = 'editroute';


  // use for Table Header modification 

  // Like Table head name is " firstname" => "First Name"
  demodata_modify_header_array: any = {
      'firstname': "First Name",
      'email': 'Email Id',
      'lastname': 'Last Name',
      'name': "Full Name"
  };


  // use for Table Header Skip 
  demodata_skip: any = ['_id', 'type', 'password'];



    // use for Table Detail Field Skip 
    demodata_detail_skip: any = ['_id', 'email', 'name'];


   // use for Table Detail inside the modal image path 
   demodata_detail_datatype: any = [{
      key: "images",
      value: 'image',
      fileurl: "http://18.222.26.198/upload/brandimages/"             // Image path 
  }];

  // updateendpoint is use for data update endpoint
  updateendpoint = 'addorupdatedata';

  // deleteendpoint is use for data delete endpoint
  deleteendpoint = 'deletesingledata';

  // this is a database collection name
  tablename = 'test';

  // searchendpoint is use for  search endpoint
  searchendpoint = 'datalist';

  // use for click to another page routing path
  click_to_add_ananother_page = '/adminlist';



  // date_search_endpoint is use for All search endpoint
  date_search_endpoint: any='datalist';


  // this is a database All search collection or view name
  date_search_source: any='test';

  // this is use for  All type of search 
  search_settings:any={

      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

      selectsearch:[{label:'Search By email',field:'email',values:this.emailarray}, {label:'Search By Status',field:'status',values:this.statusarray}], // this is use for  select search

      textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

      search:[{label:"Search By autocomplete",field:'title'}]     // this is use for  Autocomplete search
  };
constructor(public _http:HttpClient){
  this.demoCallWithHttpheader();
}
demoCallWithHttpheader(){
  let link  = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/datalist';
let data = {"source": "test",
"condition":{
  "parentid_object":"5cf51e4ce825663336bba7ce"
}}; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgyMDg0MDMsImlhdCI6MTU2ODEyMjAwM30.EPNLuX6wye4AwHMP7SLHqgyPSi3W_eSnIwaoOcP71Mc',
    
  })
};

console.log('httpOptions');
console.log(httpOptions);
this._http.post(link, JSON.stringify(data), httpOptions)
.subscribe(res=>{
  let result:any;
  result = res;
  console.log(result);
  this.demodata = result.res;
})
}
demoCall(){
  let link  = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/datalist';
  let data ={
    "source": "test",
    "condition":{
    	"parentid_object":"5cf51e4ce825663336bba7ce"
    }
};
  this._http.post(link,data)
.subscribe(res=>{
  let result:any;
  result = res;
  console.log(result);
  this.demodata = result.res;
})
}
}