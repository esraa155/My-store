import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ShoppingDetailsComponent } from './components/shoppingcart/shopping-details/shopping-details.component';
import { CartListComponent } from './components/shoppingcart/cart-list/cart-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'Login', component:LoginComponent},
  { path:'home', component: HomeComponent },
  { path:'shopping', component: ShoppingcartComponent },
  { path:'cart', component: CartListComponent },
  {path:'Details',component:ShoppingDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
