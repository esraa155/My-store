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
      cart : this.fb.group({
        Quantity :  new FormControl('', [Validators.required,Validators.min(0)]),
      }),
     });

 
  }
  
}
