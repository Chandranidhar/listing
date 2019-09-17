import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from "@angular/forms";
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    // {
    //   type: 'text',
    //   name: 'address',
    //   label: 'Address',
    //   placeholder:'Address',
    //   value: '',
    //   multiline:true,
    //   required: true,
    // },
    
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];
  public fields_new: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "First Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
      
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Last Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
              "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: 'text',
      name: 'phonenumber',
      label: 'Phone Number',
      value: '',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Phone number Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
              "/^[1-9]{1}[0-9]{9}$/"
          ),
          message: "Invalid phone number"
        }
      ]
    },
   
    // {
    //   type: 'file',
    //   name: 'picture',
    //   label: 'Picture',
    //   required: true,
    //   onUpload: this.onUpload.bind(this)
    // },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];
  constructor() { 
     this.form = new FormGroup({
    fields: new FormControl(JSON.stringify(this.fields))
  });
  this.unsubcribe = this.form.valueChanges.subscribe((update) => {
    console.log(update);
    this.fields = JSON.parse(update.fields);
  });
}

  ngOnInit() {
  }
  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDestroy() {
    this.unsubcribe();
  }

}
