import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _Api:ApiService) { }

  addCategory(data:any):Observable<any> {
    return this._Api.post('category',data); 
  }
  getCategories():Observable<any> {
    return this._Api.get('category'); 
  }
  deleteCategory(id:string):Observable<any> {
    return this._Api.delete(`category/${id}`)
  }

}

