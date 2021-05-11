import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import {ImageComponent} from './components/images/image/image.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { NewloginComponent } from './components/newlogin/newlogin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileGuard } from './gaurd/profile.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'myaccount', component: MyaccountComponent
  },
  {
    path: 'adminpanel', component: AdminComponent
  },
  {
    path: 'addproduct', component: AddproductComponent
  },
  {
    path: 'dashboard', component: AdminComponent
  },
  {
    path: 'login', component : NewloginComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate:[ProfileGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
