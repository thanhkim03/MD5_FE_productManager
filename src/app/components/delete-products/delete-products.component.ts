import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  id: any;
  products: any;


  constructor(private productService: ProductService,
              private router: Router,
              private activateRoute: ActivatedRoute,) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }
  deletePost(id: any) {
    this.productService.delete(id).subscribe(() => {
      this.router.navigate(['/']);
      alert("thành công")
    })
  }
  findById(id: any) {
    this.productService.getById(id).subscribe(data => {
      console.log(data)
      // @ts-ignore
      this.products = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
        brandId: new FormControl(data.brand.id),
      });
    });
}
}
