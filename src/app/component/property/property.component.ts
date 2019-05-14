import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../../services/property-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { DataShareService } from '../../services/data-share.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  details = null;
  propertyDetailSubscribe = null;
  propertiList = null;
  compareList = null;
  compareProperty = [];
  pager: any = {};
  pagedItems: any[];

  constructor(private propertyServiceService: PropertyServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private dataShareService: DataShareService) {

    this.propertiList = {
      list: []
    }
    this.compareList = {
      list: []
    }
  }

  ngOnInit() {
    this.getPropertyList();
    this.compareProperty = JSON.parse(sessionStorage.getItem('property'));
  }


  getPropertyList() {
    this.propertyDetailSubscribe = this.propertyServiceService.getPropertyList().subscribe((data) => {
      this.propertiList = Object.assign({},
        this.propertiList,
        {
          list: data
        });
      this.setPage(1);
    }, (error) => {
      console.log(error);
    });
  }


  getToDeatilsPage(url, id) {
    if (id === 'true') {
      var myurl = `${url}`;
    } else {
      var myurl = `${url}/${id}`;
    }
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  setPage(page: number) {
    this.pager = this.getPager(this.propertiList.list.length, page);
    this.pagedItems = this.propertiList.list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  addForCompare(data) {
    this.compareProperty = [];
    var temp = JSON.parse(sessionStorage.getItem('property'));
    if (temp == null || temp.length == 0) {
      sessionStorage.setItem('property', JSON.stringify(data));
      this.compareProperty.push(JSON.parse(sessionStorage.getItem('property')));

    } else {
      if (temp.length) {
        temp.push(data);
        this.splitArray(temp);
        sessionStorage.setItem('property', JSON.stringify(this.compareProperty));
      } else {
        this.compareList.list.push(temp);
        this.compareList.list.push(data);
        this.compareProperty = this.compareList.list;
        sessionStorage.setItem('property', JSON.stringify(this.compareList.list));
      }
    }
  }

  removeFromCompare(data) {
    this.compareProperty = _.filter(this.compareProperty, (item: any) => {
      return item.id != data
    })
    sessionStorage.setItem('property', JSON.stringify(this.compareProperty));
  }

  reset() {
    this.compareProperty = [];
    this.compareList.list = [];
    sessionStorage.setItem('property', JSON.stringify(this.compareProperty));

  }

  postComparePage(url) {
    var myurl = `${url}`;
    this.dataShareService.changeMessage({ label: 'campareData', data: this.compareProperty });
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
  
  splitArray(data) {
    let tempArray = [];
    var i = 0;
    var j;
    if (data.length > 4) {
      for (j = data.length - 1; j >= data.length - 4; --j) {
        tempArray[i++] = data[j];
      }
      this.compareProperty = tempArray;
    } else {
      this.compareProperty = data;
    }
  }
}


