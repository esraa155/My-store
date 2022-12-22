import { Component, Input, OnInit } from '@angular/core';
import {Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import IProducts from '../../shared/services/products.model';
import { ServiceProductService } from '../../shared/services/service-product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  subscription: Subscription;
  product!: IProducts[];
  constructor( private ProductService : ServiceProductService,private fb: FormBuilder,
    private cartService: CartService) {
      this.ProductService.fetchProduct();
      this.subscription = this.ProductService.products$.subscribe(products => {
       this.product = products;
      });
  }
  ngOnInit(): void {
   
  }
 filteredImages(value) {
    const imageString = value.replace('http:/13.232.25.79:4105', 'http://13.232.25.79:4105')
    return imageString
  }
 

  view(product:any):void{
    window.alert(product.description);
  }

  
  addToCart(product:any) {
    this.cartService.add(product);
    if (!this.cartService.itemInCart(product)) {
      product.qtyTotal = 1;
      this.cartService.addToCart(product); 
    }
    window.alert('Your product has been added to the cart!');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
