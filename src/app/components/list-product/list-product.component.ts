import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: any;

  constructor(private httpClient: HttpClient,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result => {
      this.list = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
  }
  sortByPrice(){
    this.productService.sortByPrice().subscribe(result => {
      this.list = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }
  sortByPriceDesc(){
    this.productService.sortByPriceDesc().subscribe(result => {
      this.list = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }
}
