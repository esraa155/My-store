import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  
  shopping! : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shopping = this.fb.group({
      shoppingcartdetails : this.fb.group({
        FullName :  new FormControl('',[Validators.required, Validators.minLength(3)]),
        Address :  new FormControl('', [Validators.required,Validators.minLength(6)]),
        credit :  new FormControl('', [Validators.required,Validators.minLength(16)]),
        
      }), 
      cart : this.fb.group({
        Quantity :  new FormControl('', [Validators.required,Validators.min(0)]),
      }),
     });

 
  }
  
}
