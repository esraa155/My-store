# My store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# run
Run npm install inside the downloaded/cloned folder:
$ npm install.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

 ## using angular material

 $ ng add @angular/material

# The names of the component

1-confirmation
2-header
3-home
4-header of home
5- login
6-product item
7- product list
8-shopping cart
9- cart list

# The names of the services
1-authentication.service
2-cart.service
3-service-product.service


# The names of the model
1-user 
2-cart
3-product

 # using input and output in angular
   @Input()product!: IProducts;
  @Output() view = new EventEmitter<IProducts>();
  @Output() addToCart1 = new EventEmitter<IProducts>();
  in component product item and product list
  and using the input in Reactive forms between to component cart list and shopping cart
  @Input() formGroupName!: string
# using Http client to get data from file json

fetchProduct() {
  const s = this.http.get<IProducts[]>('/assets/data.json').subscribe(products => {
    this.products = products;
    this.products$.next(this.products);
    s.unsubscribe();
  });

  # function filteredImages to covert the url in file json to img in page

  filteredImages(value) {
    const imageString = value.replace('http:/13.232.25.79:4105', 'http://13.232.25.79:4105')
    return imageString
  }


# using ngfor of component 
to retrieve data from file json

# using ngModel and ngModelChange
 HTML   (<input matInput type="number" [(ngModel)]="item.qtyTotal" min="1"
      type="number" class="form-control" (ngModelChange)="changeSubtotal(item ,i)"
      required  formControlName="Quantity" >
      <mat-error *ngIf="Quantity.invalid">The Minimum must be 1</mat-error>
  </mat-form-field>)


  TS   (changeSubtotal(item, index) {
  const qty = item.qtyTotal;
  const amt = item.variationCost;
  const subTotal = amt * qty;
  const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

  this.subTotalItems.toArray()[
    index
  ].nativeElement.innerHTML = subTotal_converted;
  this.cartService.saveCart();
})

# using (click) of component 
for example <button mat-stroked-button class="btn btn-secondary" (click)="removeFromCart(item)">Remove Item</button>

# using @ViewChildren in component cart list 
  @ViewChildren("subTotalWrap")subTotalItems!: QueryList<ElementRef>;
    @ViewChildren("subTotalWrap_existing")subTotalItems_existing!: QueryList<ElementRef>;

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

# using Reactive forms Validators
for example
 credit :  new FormControl('', [Validators.required,Validators.minLength(16)]),

 # using mat error 
So that the user sees a message that I have a problem with this input
for example
 <mat-error *ngIf="Quantity.invalid">The Minimum must be 1</mat-error>


 



