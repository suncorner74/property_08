import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../../services/property-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { DataShareService } from '../../services/data-share.service';

@Component({
  selector: 'app-property-serch',
  templateUrl: './property-serch.component.html',
  styleUrls: ['./property-serch.component.css']
})
export class PropertySerchComponent implements OnInit {

  details = null;
  nrSelect = null;
  propertyDetailSubscribe = null;
  propertiList = null;
  searchResult = [];
  saleOrRent = 0;
  selectLocation = null;
  selectPrice = null
  selectType = null;
  propertyTypeSubscription = null;
  propertyType = null;
  findLocations = null;
  setMinValue = 0;
  setMaxValue = 0;
  minPriceList = [];
  maxPriceList = [];

  constructor(private propertyServiceService: PropertyServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private dataShareService: DataShareService) {
    this.propertiList = {
      list: []
    }
    this.propertyType = {
      list: []
    }
    this.findLocations = [];
  }

  ngOnInit() {
    this.getPropertyList().then(result => {
      this.getPropertyType();
      this.dataShareService.currentMessage.subscribe(message => {
        if (typeof message === 'object' && (message.label === 'serachBar')) {
          console.log(message);
          this.selectLocation = message.data.setLocationType;
          this.saleOrRent = message.data.setBuyOrRent;
          this.selectType = message.data.setPropertyType;
          this.setMaxValue = message.data.setMaxValue;
          this.setMinValue = message.data.setMinValue;
          this.filterbySeach();
        };
      });
    });
    this.minPriceList = [
      {
        numberAsInt: 0,
        numberAsStr: "0"
      },
      {
        numberAsInt: 100000,
        numberAsStr: "1,00,000"
      },
      {
        numberAsInt: 500000,
        numberAsStr: "5,00,000"
      },
      {
        numberAsInt: 1000000,
        numberAsStr: "10,00,000"
      },
      {
        numberAsInt: 2000000,
        numberAsStr: "20,00,000"
      },
      {
        numberAsInt: 5000000,
        numberAsStr: "50,00,00"
      },
      {
        numberAsInt: 10000000,
        numberAsStr: "1,00,00,000"
      }
    ];

    this.maxPriceList = this.minPriceList;

  }


  getPropertyList() {
    return new Promise<any>((resolve, reject) => {
      this.propertyDetailSubscribe = this.propertyServiceService.getPropertyList().subscribe((data) => {
        this.propertiList = Object.assign({},
          this.propertiList,
          {
            list: data

          });
        this.searchResult = data;
        this.findLocation(data);
        resolve();
      }, (error) => {
        console.log(error);
        reject(error);
      });

    })

  }

  getToDeatilsPage(url, id) {
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  filterByLocation(data) {
    this.selectLocation = data;
    this.filterbySeach();
  }
  filterByType(data) {
    this.selectType = data;
    this.filterbySeach();
  }

  buyOrSale(data) {
    this.saleOrRent = data;
    this.filterbySeach();

  }
  chagePriceMinValue(data) {
    this.setMinValue = parseInt(data);
    this.maxPriceList = _.filter(this.minPriceList, (item: any) => {
      return item.numberAsInt>data
    });
    this.filterbySeach();
  }
  chagePriceMaxValue(data) {
    this.setMaxValue = parseInt(data);
    this.filterbySeach();
  }

  ngOnDestroy() {
    if (this.propertyDetailSubscribe) {
      this.propertyDetailSubscribe.unsubscribe();
    }
  }

  filterbySeach() {
    let filterLocation;
    if (this.selectLocation == null && this.selectType == null || this.selectLocation == 0 && this.selectType == 0 || this.selectLocation == 0 && this.selectType == null || this.selectLocation == null && this.selectType == 0) {
      filterLocation = _.filter(this.propertiList.list, (item: any) => {
        return item.buyOrRent === this.saleOrRent;
      });
    } else if (this.selectLocation == null && this.selectType || this.selectLocation == 0 && this.selectType) {
      filterLocation = _.filter(this.propertiList.list, (item: any) => {
        return item.type == this.selectType && item.buyOrRent === this.saleOrRent;
      });
    } else if (this.selectLocation && this.selectType == null || this.selectLocation && this.selectType == 0) {
      filterLocation = _.filter(this.propertiList.list, (item: any) => {
        return item.location.toLowerCase() == this.selectLocation.toLowerCase() && item.buyOrRent === this.saleOrRent;
      });
    } else {
      filterLocation = _.filter(this.propertiList.list, (item: any) => {
        console.log(item, this.selectType)
        return item.type == this.selectType.toLowerCase() && item.location.toLowerCase() == this.selectLocation.toLowerCase() && item.buyOrRent == this.saleOrRent;
      });
    }
    this.searchResult = filterLocation;
    this.filterByPrice();
  }

  getPropertyType() {
    this.propertyTypeSubscription = this.propertyServiceService.getPropertyType().subscribe((data) => {
      this.propertyType = Object.assign({},
        this.propertyType,
        {
          list: data

        });
    }, (error) => {
      console.log(error);
    });
  }

  findLocation(data) {
    let i = 0;
    let j = 0;
    let tempdata = []
    for (j = 0; j < data.length; ++j) {
      if (data[j] && data[j].location && data[j].location != undefined && data[j].location != null) {
        tempdata[i++] = data[j].location;
      }
    };
    this.findLocations = _.uniqWith(tempdata, _.isEqual);
  }

  filterByPrice() {
    let filterLocation;
    if (this.setMinValue == 0 && this.setMaxValue == 0) {

    } else if (this.setMinValue > 0 && this.setMaxValue == 0) {
      filterLocation = _.filter(this.searchResult, (item: any) => {
        return item.price > this.setMinValue;
      });
      this.searchResult = filterLocation;

    } else if (this.setMinValue === 0 && this.setMaxValue > 0) {
      filterLocation = _.filter(this.searchResult, (item: any) => {
        return item.price < this.setMaxValue
      });
      this.searchResult = filterLocation;

    } else if (this.setMinValue > 0 && this.setMaxValue > 0) {
      filterLocation = _.filter(this.searchResult, (item: any) => {
        return item.price > this.setMinValue && item.price < this.setMaxValue
      });
      this.searchResult = filterLocation;

    }
  }
}
