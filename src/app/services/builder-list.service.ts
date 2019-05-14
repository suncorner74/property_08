import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { IbuildersList } from '../models/ibuilder-list';

@Injectable({
  providedIn: 'root'
})
export class BuilderListService {

  constructor(public httpClient: HttpClient) { }

  getBuilderList(): Observable<IbuildersList[]> {
    let url: string = URL + `builders/list`;
    return this.httpClient.get<IbuildersList[]>(url).pipe(map(result => result));
  }

}
