import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import IProducts from '../../shared/services/products.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
 private products : IProducts []=[];
 products$ = new BehaviorSubject<IProducts[]>(this.products);
 
  constructor(private http: HttpClient) {
   
}



fetchProduct() {
  const s = this.http.get<IProducts[]>('/assets/data.json').subscribe(products => {
    this.products = products;
    this.products$.next(this.products);
    s.unsubscribe();
  });
}








}
