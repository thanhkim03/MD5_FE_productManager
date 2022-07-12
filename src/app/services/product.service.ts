import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped, ɵValue} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'http://localhost:8080/products'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  save(product: Product): Observable<any> {
    return this.httpClient.post(this.API_URL, product)
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL + `/${id}`);
  }

  // getByName(name :any):Observable<any>{
  //   return this.httpClient.get(this.API_URL+`/search?name=`+`${name}`)
  // }

  delete(id: number) {
    return this.httpClient.delete(this.API_URL + `/${id}`)

  }

  update(product: any, id: any): Observable<Product> {
    // @ts-ignore
    return this.httpClient.put(this.API_URL + `/${id}`, product);
  }

  sortByPrice(): Observable<any> {
    return this.httpClient.get(this.API_URL + `/sortByPrice`)
  }

  sortByPriceDesc(): Observable<any> {
    return this.httpClient.get(this.API_URL + `/sortByPriceDesc`)
  }
}
