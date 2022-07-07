import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./components/list-product/list-product.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {SearchProductsComponent} from "./components/search-products/search-products.component";
import {DeleteProductsComponent} from "./components/delete-products/delete-products.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

const routes: Routes = [
  {path:"",component:ListProductComponent},
  {path:"search-product/:id",component:SearchProductsComponent},
  {path:"create-product",component:CreateProductComponent},
  {path:"delete-product/:id",component:DeleteProductsComponent},
  {path:"update-product/:id",component:EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
