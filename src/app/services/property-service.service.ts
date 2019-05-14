import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  constructor(private httpClient: HttpClient) { }

  getProperty(id): Observable<any> {
    let url: string = URL + `properties`;
    return this.httpClient.get(url).pipe(map(result => result));
  }

  getPropertyList(): Observable<any> {
    let url: string = URL + `property/list`;
    return this.httpClient.get(url).pipe(map(result => result));
  }

  getPropertyDetail(id): Observable<any> {
    let url: string = URL + `property/details`;
    return this.httpClient.post(url, { id: id }).pipe(map(result => result));
  }

  getPropertyType():Observable<any>{
    let url:string=URL+ `common/propertyType`;
    return this.httpClient.get(url).pipe(map(result => result));    
  }


}
