import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit {
  shopping!: FormGroup
  FullName = new FormControl('',  [Validators.required,Validators.minLength(3)]);
  Address = new FormControl('', [Validators.required, Validators.minLength(6)]);
  credit =  new FormControl('',  [Validators.required,Validators.minLength(16)]);
  @Input() formGroupName!: string
  private subscriptions = new Subscription();
  constructor(private rootFormGroup: FormGroupDirective) {
 
  }

 ngOnInit(): void {
  this.shopping = this.rootFormGroup.control.get(this.formGroupName) as FormGroup

  this.subscriptions.add(this.shopping.get("selectedMinARPU")?.valueChanges.subscribe(value => {
    this.FullName = value;
  }));
 

 this.subscriptions.add(this.shopping.get("selectedMinARPU")?.valueChanges.subscribe(value => {
  this.Address = value;
}));

this.subscriptions.add(this.shopping.get("selectedMinARPU")?.valueChanges.subscribe(value => {
  this.credit = value;
}));
}


onsubmit():void{
alert("successfully")
}
}
