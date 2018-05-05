import { Component, OnInit } from '@angular/core';

import { Bus }    from '../../app/bus';
import { MessageService } from "../../app/service/message.service";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'busDetails',
  templateUrl: './busDetails.component.html',
  styleUrls: ['./busDetails.component.css'],
  providers: [MessageService]
})

export class BusDetailsComponent implements OnInit{

  constructor( private messageService : MessageService,  private activatedRoute: ActivatedRoute, 
                private router: Router){ }

bus: Bus[];
busNum:any;

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
        this.busNum = params['id'];
        console.log(this.busNum);
      });
        this.getBusDetails();
  }

getBusDetails():void{
    this.messageService.getBusDetails(this.busNum)
      .subscribe((bus:Bus[]) => {
        console.log("T "+bus);
        this.bus = bus;
        // this.validate(tyre);
    });
}

 deleteData():void{
    console.log("delete tyre");
    this.messageService.deleteBus(this.busNum);
    this.router.navigateByUrl('/buswheel');
 };
}