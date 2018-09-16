import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL, URL_LIST } from '../index_url';
import { DataRta } from './DataRta';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = "&source=USD&format=1";
  constructor(private http: HttpClient) {
   }

  getCurrency(currency:string):Observable<DataRta[]>{
    return this.http.get<DataRta[]>(URL+currency+this.url);
  }

  getList(){
    return this.http.get(URL_LIST);
  }
  
}
