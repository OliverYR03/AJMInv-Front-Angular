import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Proveedores } from './proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  // URL to getAllProviders()
  private urlApi = "http://localhost:8085/AJMInventario/api/proveedores/list";

  constructor(private httpClient : HttpClient) { }

  // Get all providers
  getAllProviders():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${this.urlApi}`)
  }

  // Create a provider
  createProvider(proveedores:Proveedores): Observable<object>{
    return this.httpClient.post(`${this.urlApi}/new`, proveedores);
  }

  // Update a provider
  updateProvider(id:number, proveedores:Proveedores) : Observable<Object>{
    return this.httpClient.put(`${this.urlApi}/${id}`, proveedores);
  }

  getProviderId(id:number) : Observable<Proveedores>{
    return this.httpClient.get<Proveedores>(`${this.urlApi}/${id}`);
  }
  

  dropProvider(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
