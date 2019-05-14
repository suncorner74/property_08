import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserentryService {
  url: string = 'http://localhost:3000/e2eservice/create';
  constructor(private httpClient :HttpClient) { }
  sendData(messageContent: any) {
    return this.httpClient.post(this.url,
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
