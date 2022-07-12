import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListProductComponent } from './components/list-product/list-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateProductComponent } from './components/create-product/create-product.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductsComponent } from './components/delete-products/delete-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CreateProductComponent,
    SearchProductsComponent,
    EditProductComponent,
    DeleteProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
