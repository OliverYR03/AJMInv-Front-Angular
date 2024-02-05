import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './productos';
import { Proveedores } from '../proveedores/proveedores';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // URL to getAllProviders()
 

  constructor(private httpClient : HttpClient) { }

  // Get all Products
  getAllProducts():Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(`${environment.urlApi}/products/list`)
  }

  // Get all providers
  getAllProviders():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${environment.urlApi}/products/list`)
  }

  // Create a Product
  createProduct(productos:Productos): Observable<object>{
    return this.httpClient.put(`${environment.urlApi}/products/list/new`, productos);
  }

  // Update a Product
  updateProduct(id:number, productos:Productos) : Observable<Object>{
    return this.httpClient.put(`${environment.urlApi}/products/list/${id}`,productos);
  }

  // Get Product by Id
  getProductId(id:number) : Observable<Productos>{
    return this.httpClient.get<Productos>(`${environment.urlApi}/products/list/${id}`);
  }

  // Delete Product
  dropProduct(id:number) : Observable<Object>{
    return this.httpClient.delete(`${environment.urlApi}/products/list/${id}`);
  }


}
