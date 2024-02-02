import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(id:number):Observable<User>
  {
    return this.http.get<User>(environment.urlApi+"user/"+id).pipe(
      catchError(this.handleError)
    )
  }

  updateUser(UserRequest:User):Observable<any>
  {
    return this.http.put(environment.urlApi+"user", UserRequest).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producido un error ', error.error)
    }
    else{
      console.log('Backend retornó el código de estado ', error.status, error.error)
    }
    return throwError(()=> new Error('Something gone wrowng. Try again'));
    
  }
}
