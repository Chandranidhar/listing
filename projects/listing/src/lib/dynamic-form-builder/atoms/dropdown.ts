/**
 * Created by debasiskar on 16/04/19.
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dropdown',
    template: `
      <div [formGroup]="form">
      <mat-select [id]="field.name" [formControlName]="field.name" required>
       
          <mat-option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</mat-option>
        </mat-select>
      </div> 
    `
})
export class DropDownComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;

    constructor() {

    }
}