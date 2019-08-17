import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:id' , component: ProductDetailComponent},
  {path: 'home' , component: HomeComponent},
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
