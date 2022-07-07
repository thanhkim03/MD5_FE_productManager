import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService,
              private router: Router,
              private activateRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.products = {
      name: '', price: '', description: '', brand: {
        id: "1"
      }
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.deletePost(id);
    });
  }

  deletePost(id: any) {
    this.productService.delete(id).subscribe(res => {
      this.products = res;
      console.log('Post deleted successfully!', res);
      alert("thành công")
    })
  }
}
