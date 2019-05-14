import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { PropertyDetailsModel } from '../../../models/property-details-model';



@Injectable({
  providedIn: 'root'
})
export class BuilderDetailsService {

  constructor(private http:HttpClient) {}
  builderDetails = [
    {
     propertyTitle:"Odisha Udyog Pvt. Ltd.",
     propertyAddress:"2096 Monroe Street, Houston, 77030 USA",
     propertyDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget erat nec mi tempor elementum. Morbi enim orci, pharetra sed sem eu, imperdiet molestie libero. Donec pretium eros id tellus lobortis, sed maximus odio pulvinar. Nunc tristique nunc sit amet lectus ultrices, in blandit dolor placerat. In efficitur maximus rutrum. Proin porta purus ante, nec eleifend odio consectetur at. Nulla commodo nisi magna, ut feugiat nunc efficitur at. Mauris dignissim imperdiet velit, id laoreet orci tempus eget. Vivamus id ligula fermentum, imperdiet enim a, consectetur sapien. Duis efficitur dapibus congue.",
     propertyDescription:"This cozy studio is located in the prime location of the historical center of Minsk. Internatsionalnaya str 13.The apartment is located on the second floor of historical building, on the one of the most central but safe and quiet street.Great restaurants, cafe's and bars in the neighborhood. French cuisine, Japanese food, 'Grand Cafe' European cuisine, Spanish café 'Tapas bar', an Italian café 'Grip' including early morning breakfasts, 'McDonalds' all of the cafes are within 50 - 150 meters from the house.",
     image_urls:["img_slider_1.jpg","img_slider_2.jpg","img_slider_4.jpg","img_slider_5.jpg","img_slider_3.jpg","img_slider_2.jpg"]
    }
  ];

  // getBuilderDetails(){
  //   return this.builderDetails;
  // }

  getBuilderDetail(id):Observable<PropertyDetailsModel[]>{
   //let data = 2;
    let url: string = URL + `builders/details`;
    return this.http.post<PropertyDetailsModel[]>(url,{
      id: id
    }).pipe(map(result => result));
  }

}
