import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import IProducts from '../../shared/services/products.model';
import { ServiceProductService } from '../../shared/services/service-product.service';
import { CartProduct } from '../../shared/services/cart.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  items = this.cartService.getItems();
  
  cartProducts:IProducts[] = [];
 
   products : IProducts[] = [];
   @Input() formGroupName!: string
   private subscriptions = new Subscription();
   Quantity = new FormControl('', [Validators.min(0)]);
    shopping! : FormGroup;
    @ViewChildren("subTotalWrap")subTotalItems!: QueryList<ElementRef>;
    @ViewChildren("subTotalWrap_existing")subTotalItems_existing!: QueryList<ElementRef>;
   constructor(private productsService: ServiceProductService, private currencyPipe: CurrencyPipe, private route: ActivatedRoute,private fb: FormBuilder,
    private cartService: CartService,private rootFormGroup: FormGroupDirective) { }
   
    
  ngOnInit(): void {
    this.shopping = this.rootFormGroup.control.get(this.formGroupName) as FormGroup

    this.subscriptions.add(this.shopping.get("selectedMinARPU")?.valueChanges.subscribe(value => {
      this.Quantity = value;
    }));

    this.items = this.cartService.getItems();
    
  }
  filteredImages(value) {
    const imageString = value.replace('http:/13.232.25.79:4105', 'http://13.232.25.79:4105')
    return imageString
  }


  
    



get total() {
  return this.items.reduce(
    (sum, x) => ({
      qtyTotal: 1,
      variationCost: sum.variationCost + x.qtyTotal * x.price
    }),
    { qtyTotal: 1, variationCost: 0 }
  ).variationCost;
}

changeSubtotal(item, index) {
  const qty = item.qtyTotal;
  const amt = item.variationCost;
  const subTotal = amt * qty;
  const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

  this.subTotalItems.toArray()[
    index
  ].nativeElement.innerHTML = subTotal_converted;
  this.cartService.saveCart();
}
removeFromCart(item) {
  this.cartService.removeItem(item);
  this.items = this.cartService.getItems();
}

//----- clear cart item
clearCart() {
 
  this.cartService.clearCart();
  this.items = [...this.cartService.getItems()];
}



}
