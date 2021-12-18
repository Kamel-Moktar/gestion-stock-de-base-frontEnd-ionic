import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {Product} from "../models/product";
import {ProductToProvide} from "../models/product-to-provide";





@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient,private auth: AuthenticationService) {
  }

  getAllProduct(): Observable<Product[]> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.get<Product[]>(host + "/getAllProducts", {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).pipe();
  }

 saveProductToProvide(product :Product[]){

    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.put<Product[]>(host + "/saveProductToProvide",product,{
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).pipe();
  }
  saveProductToSale(product :Product[]){

    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.put<Product[]>(host + "/saveProductToSle",product,{
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).pipe();
  }


  addProduct(user: Product): Observable<Product> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;

    return this.http.post<Product>(host + "/addProduct", user, {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).pipe();

  }


  deleteProduct(p: Product): Observable<any> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.delete<void>(host + "/deleteProduct/" + p.id, {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()})
      }
    ).pipe();

  }

  getProductByID(id: String): Product {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    let user: Product = null;
    this.http.get<Product>(host + "/addProduct" + id, {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).subscribe(
      (u) => user = u
    );
    return user;
  }

  getProductByname(name: String): Observable<Product> {

    console.log(name);

    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    let user: Product = null;
    return this.http.get<Product>(host + "/getProductByName/" + name, {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    )
  }

  /*
  Modifier un collaborateur
   */

  updateProduct(user: Product) {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.put<Product>(host + "/updateProduct", user, {
        headers: new HttpHeaders({"Authorization": "" + this.auth.loadToken()}), observe: "body"
      }
    ).pipe();
  }
}





