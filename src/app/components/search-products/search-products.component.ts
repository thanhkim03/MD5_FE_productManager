import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  // @ts-ignore
  product: Product;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.product = {
      name: '', price: '', description: '', brand:{
        id: "1"
      }
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getProduct(id);
    });
  }

  getProduct(id: any) {
    this.productService.getById(id).subscribe(yy => {
      this.product = yy;
    })
  }
}

