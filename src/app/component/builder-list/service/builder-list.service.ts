import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuilderListService {
  builderList = [
    {
    builderTitle:"Odisha Udyog",
    builderDetails:"Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus.",
    builderDetails_id:"1",
    image_url:"builder1.jpg"
    },
    {
    builderTitle:"Megabuilders",
    builderDetails:"Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Legendos intellegam id usu",
    builderDetails_id:"2",
    image_url:"builder2.jpg"
    },
    {
    builderTitle:"D.N Homes",
    builderDetails:"Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus.",
    builderDetails_id:"3",
    image_url:"builder3.jpg"
    }
    ];
  constructor(public httpClient:HttpClient,public http:Http) { }

  getBuilderList(){     
    return this.builderList;  
   }
}
