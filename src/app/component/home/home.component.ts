import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './../../services/home-service.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from "@angular/router";
import * as _ from 'lodash';
import * as $ from 'jquery';
import { PropertyServiceService } from '../../services/property-service.service';
import { DataShareService } from '../../services/data-share.service';




@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    properties_array = null;
    properties_array1 = [];
    imageList = null;
    imageSubscribe = null;
    advertisement = null;
    downTopProperty = null;
    setByOrRent = 0;
    setLocationType = "0";
    setPropertyType = "0";
    findLocations = [];
    propertyTypeSubscription = null;
    propertyType = null;
    setMinValue = 0;
    setMaxValue = 0;
    minPriceList = [];
    maxPricelist = [];


    propertySubscribe: any;
    constructor(private homeServiceService: HomeServiceService,
        private router: Router,
        private propertyServiceService: PropertyServiceService,
        private dataShareService: DataShareService) {
        this.properties_array = {
            properties_list: []
        }
        this.imageList = {
            imgAarry: []
        }
        this.advertisement = {
            imgAarry: []
        }
        this.propertyType = {
            list: []
        }
    }

    ngOnInit() {
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

        this.maxPricelist = this.minPriceList;
        this.getTopProperties();
        this.getImageOfBanner();
        this.getAdvertisementImage();
        this.getPropertyType()

        // this.imageList.imgAarry = ["banner1.jpg", "banner2.jpg"];
    }

    getImageOfBanner() {
        this.propertySubscribe = this.homeServiceService.getImage().subscribe((data) => {
            this.imageList = Object.assign({},
                this.imageList,
                {
                    imgAarry: JSON.parse(data["_body"]),

                });
        }, (error) => {
            console.log(error);
        });
    }

    getTopProperties() {
        let topPropety = [];
        let topNine = [];
        let i;
        this.imageSubscribe = this.homeServiceService.getTopPropertiesService().subscribe((data) => {
            topPropety = data;
            for (i = 0; i < 5; ++i) {
                topNine[i] = topPropety[i];
            }
            this.properties_array = Object.assign({},
                this.properties_array,
                {
                    properties_list: topNine
                });

            this.downTopProperty = _.filter(data, (item: any) => {
                return item.topPropertyFlag == 2;
            });
            this.findLocation(data);
            console.log(this.downTopProperty);
        }, (error) => {
            console.log(error);
        });
    }

    getAdvertisementImage() {
        this.propertySubscribe = this.homeServiceService.getAdertisement().subscribe((data) => {
            this.advertisement = Object.assign({},
                this.advertisement,
                {
                    imgAarry: JSON.parse(data["_body"]),

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

    byOrRent(data) {
        this.setByOrRent = data;
    }
    filterByLocation(data) {
        this.setLocationType = data;
    }
    filterByType(data) {
        this.setPropertyType = data;
    }
    chagePriceMinValue(data) {
        this.setMinValue = data;
        this.maxPricelist = _.filter(this.minPriceList, (item: any) => {
            return item.numberAsInt > data
        });
    }
    chagePriceMaxValue(data) {
        this.setMaxValue = data;
    }

    searchForResult() {
        let filterSerachBar = {
            setPropertyType: this.setPropertyType,
            setLocationType: this.setLocationType,
            setBuyOrRent: this.setByOrRent,
            setMinValue: this.setMinValue,
            setMaxValue: this.setMaxValue
        }

        var myurl = `${'/propertySearch'}`;
        this.dataShareService.changeMessage({ label: 'serachBar', data: filterSerachBar })
        this.router.navigateByUrl(myurl);
    }
}
