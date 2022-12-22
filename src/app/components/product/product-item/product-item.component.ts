import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import IProducts from '../../shared/services/products.model';
import { ServiceProductService } from '../../shared/services/service-product.service';
import { CartService } from '../../shared/services/cart.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  shopping! : FormGroup;
  subscription: Subscription;
  @Input()product!: IProducts;
  @Output() view = new EventEmitter<IProducts>();
  @Output() addToCart1 = new EventEmitter<IProducts>();
  products!: IProducts[];
  constructor( private ProductService : ServiceProductService,private fb: FormBuilder,
    private cartService: CartService) {
      this.ProductService.fetchProduct();
      this.subscription = this.ProductService.products$.subscribe(products => {
       this.products = products;
      });
  }
 filteredImages(value) {
    const imageString = value.replace('http:/13.232.25.79:4105', 'http://13.232.25.79:4105')
    return imageString
  }
  viewD(product:any){
    this.view.emit(this.product)
    window.alert(product.description);
  }
  ngOnInit(): void {
   
  }
  addToCart(item) {
    this.addToCart1.emit(this.product);
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); 
    }
    alert('Your product has been added to the cart!');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
