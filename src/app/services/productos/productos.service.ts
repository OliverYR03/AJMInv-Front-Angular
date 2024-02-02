import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './productos';
import { Proveedores } from '../proveedores/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // URL to getAllProviders()
  private urlApi = "http://localhost:8085/AJMInventario/api/products/list";

  constructor(private httpClient : HttpClient) { }

  // Get all Products
  getAllProducts():Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(`${this.urlApi}`)
  }

  // Get all providers
  getAllProviders():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${this.urlApi}`)
  }

  // Create a Product
  createProduct(productos:Productos): Observable<object>{
    return this.httpClient.post(`${this.urlApi}/new`, productos);
  }

  // Update a Product
  updateProduct(id:number, productos:Productos) : Observable<Object>{
    return this.httpClient.put(`${this.urlApi}/${id}`,productos);
  }

  // Get Product by Id
  getProductId(id:number) : Observable<Productos>{
    return this.httpClient.get<Productos>(`${this.urlApi}/${id}`);
  }

  // Delete Product
  dropProduct(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }


}
