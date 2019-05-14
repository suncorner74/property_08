import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from './../../services/property-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserentryService } from '../../services/userentry.service';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  details = null;
  propertyDetailSubscribe = null;
  propertyListSubscribe = null
  propertiesDetails = null;
  propertiList = null;
  userEntryForm: FormGroup;
  submitted = false;
  loading = false;
  propertyId: any;
  userId: any;
  constructor(private propertyServiceService: PropertyServiceService, private userentryservice: UserentryService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.propertiesDetails = {
      detail: []
    }
    this.propertiList = {
      list: []
    }
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPropertyDetail(id);
    this.getPropertyList();
    this.userEntryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      visitDateTime: ['', [Validators.required]],
      noOfPerson: ['', [Validators.required]],
      ownVehicle: [''],
      pickupLocation: ['', [Validators.required]],


    });
  }

  get f() { return this.userEntryForm.controls; }

  getPropertyDetail(id) {
    this.propertyDetailSubscribe = this.propertyServiceService.getPropertyDetail(id).subscribe((data) => {
      this.propertiesDetails = data[0];
      this.propertyId = data[0].id;
      this.userId = data[0].userId;
    }, (error) => {
      console.log(error);
    });
  }

  getPropertyList() {
    let topPropety;
    let topNine = [];
    let i;
    this.propertyListSubscribe = this.propertyServiceService.getPropertyList().subscribe((data) => {
      topPropety = data;
      for (i = 0; i < 5; ++i) {
        topNine[i] = topPropety[i];
      }
      this.propertiList = Object.assign({},
        this.propertiList,
        {
          list: topNine

        });
    }, (error) => {
      console.log(error);
    });
  }
  onSubmit(event) {
    this.submitted = true;
    if (this.userEntryForm.invalid) {
      return;
    }
    var enquiryEntry = {
      userId: this.userId,
      propertyId: this.propertyId,
      name: this.userEntryForm.value.name,
      email: this.userEntryForm.value.email,
      phoneNumber: this.userEntryForm.value.phoneNumber,
      visitDateTime: this.userEntryForm.value.visitDateTime,
      noOfPerson: this.userEntryForm.value.noOfPerson,
      ownVehicle: this.userEntryForm.value.ownVehicle,
      pickupLocation: this.userEntryForm.value.pickupLocation

    }
    this.userentryservice.sendData(enquiryEntry).subscribe(() => {
      alert('Records save sucessfully');
    }, error => {
      console.log('Error', error);
    });

  }
  revert() {
    this.userEntryForm.reset();
  }



}
