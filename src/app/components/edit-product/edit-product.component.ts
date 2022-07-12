import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BrandService} from "../../services/brand.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Brand} from "../../models/brand";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    brandId: new FormControl(''),
  })
  obj: any;
  id: any;
  listBrand: Brand[] = [];
  constructor(private productService:ProductService,
              private activatedRoute: ActivatedRoute,
              private brandService : BrandService,
              private router: Router,) {}

  ngOnInit(): void {
    this.brandService.findAll().subscribe((data) => {
      this.listBrand = data;
    })
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.findById(this.id);
    })

  }
  findById(id: any) {
    this.productService.getById(id).subscribe((data) => {
      console.log(data)
      // @ts-ignore
      this.form = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
        brandId: new FormControl(data.brand.id),
      });
    });
  }
  save () {
    this.obj = {
      name: this.form.value.name,
      price: this.form.value.price,
      description: this.form.value.description,
      brand: {
        id: this.form.value.brandId,
      }
    };
    this.productService.update( this.obj,this.id).subscribe(() => {
      this.router.navigate(['/']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
