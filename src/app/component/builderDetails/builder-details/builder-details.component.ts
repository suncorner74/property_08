import { Component, OnInit } from '@angular/core';
import { BuilderDetailsService } from './builder-details.service';
import { PropertyDetailsModel } from '../../../models/property-details-model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-builder-details',
  templateUrl: './builder-details.component.html',
  styleUrls: ['./builder-details.component.css']
})
export class BuilderDetailsComponent implements OnInit {

  constructor(private BuilderDetails:BuilderDetailsService,private route: ActivatedRoute, ) {}
  builderDetail:PropertyDetailsModel[];
  ngOnInit() {
   // this.builderDetails = this.BuilderDetails.getBuilderDetails();
    //console.log(this.builderDetails);
    const id = +this.route.snapshot.paramMap.get('id');
    this.getBuilderDetails(id)  
  }

  getBuilderDetails(id){
    this.BuilderDetails.getBuilderDetail(id).subscribe((builderDetail) => {
      this.builderDetail = builderDetail;
      console.log(this.builderDetail);
  }, (error) => {
    console.log(error);
  });
  }

}
