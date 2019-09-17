/**
 * Created by debasiskar on 16/04/19.
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">


      <mat-radio-group>
        <mat-radio-button *ngFor="let opt of field.options" [value]="opt.key" >{{opt.label}}</mat-radio-button>
      </mat-radio-group>
       
      </div> 
    `
})
export class RadioComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
}