import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  API='http://localhost:8080/brand';
  constructor(private httpClient:HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }
}
