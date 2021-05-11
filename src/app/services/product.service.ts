import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8082/services/';

  constructor(private http: HttpClient) {
  }

  showMessage(){
    console.log("Service Called");
  }

  getAllProducts(limitOfResults=10): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'product/getAll', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'product/:' + id);
  }

  getProductsFromCategory(catid: Number): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'product/category/' + catid);
  }

}
