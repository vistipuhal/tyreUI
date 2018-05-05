import { Component } from '@angular/core';

import { Bus }    from '../../app/bus';
import { NgForm } from '@angular/forms';
import { MessageService } from "../../app/service/message.service";

@Component({
  selector: 'bus-form',
  templateUrl: './busForm.component.html',
  styleUrls: ['./busForm.component.css'],
  providers: [MessageService]

})
export class BusFormComponent {

 constructor( private messageService : MessageService){  }


postBusData(form:NgForm):void{

  console.log("in" + JSON.stringify(form.value)); 
  this.messageService.saveBus(JSON.stringify(form.value));
  
  }

}