import { Component, OnInit } from '@angular/core';
import { BuilderListService } from 'src/app/services/builder-list.service';
import { IbuildersList } from '../../models/ibuilder-list';



@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.css'],
  
})
export class BuilderListComponent implements OnInit {
  buildersdata: IbuildersList[];
  
  constructor(private builderList:BuilderListService) { }

  ngOnInit() {
    
   this.getBuilderList();
  }
  getBuilderList(){
    this.builderList.getBuilderList().subscribe(
      (datalist) => this.buildersdata = datalist,
      (err) => console.log(err)
      
    );
   
  }
}
