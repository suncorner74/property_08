import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../services/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareList: any = [];
  constructor(private dataShareService: DataShareService,
    private router: Router) { }

  ngOnInit() {
    this.dataShareService.currentMessage.subscribe(message => {
      if (typeof message === 'object' && (message.label === 'campareData')) {
        this.compareList = message.data;
      };
    });
    if (this.compareList.length==0) {
      this.compareList = JSON.parse(sessionStorage.getItem('property'));
    }
  }

  clearCampareList() {
    this.compareList = [];
    sessionStorage.setItem('property', JSON.stringify(this.compareList));
    this.backToProperty("/property")
  }

  backToProperty(url) {
    var myurl = `${url}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
