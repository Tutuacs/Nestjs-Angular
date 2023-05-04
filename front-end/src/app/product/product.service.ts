import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = 'http://localhost:8000'

  constructor(private readonly http:HttpClient) {}

  getProducts(){
    return this.http.get(this.apiURL+'product');
  }

  getSubCategory(id:string){
    return this.http.get(this.apiURL+'/product/subcategory/'+id)
  }

  getProductId(id:string){
    return this.http.get(this.apiURL+'/product/'+ id)
  }
}
