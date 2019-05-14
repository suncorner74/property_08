import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource=new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(obj){
    this.messageSource.next(obj);
  }
}
