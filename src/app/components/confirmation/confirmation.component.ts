import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  rootFormGroup: any;

  constructor(private fb: FormBuilder) { }
  confirmation! : FormGroup;


  FullName = new FormControl('',  [Validators.required,Validators.minLength(3)]);
  Address = new FormControl('', [Validators.required, Validators.minLength(6)]);
  credit =  new FormControl('',  [Validators.required,Validators.minLength(16)]);
 
  private subscriptions = new Subscription();
  ngOnInit(): void {

   this.confirmation = this.fb.group({
      FullName :  new FormControl('',[Validators.required, Validators.minLength(3)]),
      Address :  new FormControl('', [Validators.required,Validators.minLength(6)]),
      credit :  new FormControl('', [Validators.required,Validators.minLength(16)]),
      
    }); 


  }
  formGroupName(formGroupName: any): FormGroup<any> {
    throw new Error('Method not implemented.');
  }


  
onsubmit():void{
  alert("successfully")
  }

}
