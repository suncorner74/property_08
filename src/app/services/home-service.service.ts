import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(public httpClient: HttpClient, public http: Http) { }


  getTopPropertiesService(): Observable<any> {
    let url: string = URL + `property/list`;
    return this.httpClient.get(url).pipe(map(result => result));
  }


  getImage(): Observable<any> {
    let url: string = URL + `common/banners`;
    return this.http.get(url).pipe(map(result => result));
  }


  getAdertisement(): Observable<any> {
    let url: string = URL + `common/advertisement`;
    return this.http.get(url).pipe(map(result => result));
  }


}
