import { Component, OnInit } from '@angular/core';

import { Tyre }    from '../../app/tyre';
import { MessageService } from "../../app/service/message.service";

// import {MaterialModule} from '@angular/material';
// import { MyDatePickerModule } from 'mydatepicker';
// import { MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule } from "@angular/material";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tyreDetails',
  templateUrl: './tyreDetails.component.html',
  styleUrls: ['./tyreDetails.component.css'],
  providers: [MessageService]
})

export class TyreDetailsComponent implements OnInit{

  constructor( private messageService : MessageService,  private activatedRoute: ActivatedRoute){  }

  tyre: Tyre[];
  tyreNum: any;

  ngOnInit(){
         this.activatedRoute.params.subscribe((params: Params) => {
        this.tyreNum = params['id'];
        console.log(this.tyreNum);
      });
        this.getTyreDetails(this.tyreNum);
  // }
  }

  getTyreDetails(req:any):void{
    this.messageService.getTyreDetails(req)
      .subscribe((tyre:Tyre[]) => {
        console.log("T "+tyre);
        this.tyre = tyre;
        this.validate(tyre);
    });
  }

  deleteData():void{
    console.log("delete tyre");
    this.messageService.deleteTyre(this.tyreNum);
  };

  validate(tyre):void{
    if(tyre != null)
    {
      // tyre.manufacDate = new Date(tyre.manufacDate);
      console.log(tyre.manufacDate);
    }
  }

}