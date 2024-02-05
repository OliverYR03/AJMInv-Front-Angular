import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { environment } from 'src/app/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  // Get all Products
  getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.urlApi}/categoria/list`)
  }

  // Create a Product
  createCategory(category:Category): Observable<object>{
    return this.http.put(`${environment.urlApi}/categoria/list/new`, category);
  }

  // Update a Product
  updateCategory(id:number, category:Category) : Observable<Object>{
    return this.http.put(`${environment.urlApi}/categoria/list/${id}`,category);
  }

  // Get Product by Id
  getCategoryId(id:number) : Observable<Category>{
    return this.http.get<Category>(`${environment.urlApi}/categoria/list/${id}`);
  }

  // Delete Product
  dropCategory(id:number) : Observable<Object>{
    return this.http.delete(`${environment.urlApi}/categoria/list/${id}`);
  }
}
