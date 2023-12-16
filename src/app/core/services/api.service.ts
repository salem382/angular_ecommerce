import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseURL

  constructor(private Http : HttpClient) { }

  get<T>(url:string):Observable<T> {
    return this.Http.get<T>(`${this.baseUrl}${url}`);
  }
  post<T>(url:string, data:any):Observable<T> {
    return this.Http.post<T>(`${this.baseUrl}${url}`, data);
  }
  put<T>(url:string, data:any):Observable<T> {
    return this.Http.put<T>(`${this.baseUrl}${url}`, data);
  }
  delete<T>(url:string):Observable<T> {
    return this.Http.delete<T>(`${this.baseUrl}${url}`);
  }

}
