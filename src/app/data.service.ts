import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../index_url';
import { DataRta } from './DataRta';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = "&source=USD&format=1";
  constructor(private http: HttpClient) {
   }

   getCurrency(currency:string){
      return this.http.get<DataRta>(URL+currency+this.url);
   }

  
}
