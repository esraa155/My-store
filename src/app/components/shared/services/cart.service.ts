import { Injectable } from '@angular/core';
import { ServiceProductService } from './service-product.service';
import IProducts from '../../shared/services/products.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartProduct } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>("./assets/data.json");
  }
    getItems() {
      return this.items;
    }

    getProducts(){
        return this.productList.asObservable();
      }
  
      setProduct(product : any){
        this.items.push(...product);
        this.productList.next(product);
      }

      addToCart(addedItem) {
        this.items.push(addedItem);
        this.saveCart();
      }

      add(product:IProducts){

        this.items.push(product);
     
        this.productList.next(this.items);
    this.saveCart();
        
       }

    removeItem(item) {
       const index = this.items.findIndex(o => o.id === item.id);

        if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  saveCart(): void {
      localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }
  clearCart() {
    this.items = [];
  }
  
  itemInCart(item): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }
}
