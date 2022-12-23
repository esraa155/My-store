import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

import { CartListComponent } from './components/shoppingcart/cart-list/cart-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'Login', component:LoginComponent},
  { path:'home', component: HomeComponent },
  { path:'shopping', component: ShoppingcartComponent },
  { path:'cart', component: CartListComponent },
  {path:'Confirmation',component:ConfirmationComponent},
  { path: '**', redirectTo: '/'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
