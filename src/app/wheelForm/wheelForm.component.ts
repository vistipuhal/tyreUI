import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tyre }    from '../../app/tyre';
import { MessageService } from "../../app/service/message.service";

// import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

@Component({
  selector: 'wheel-form',
  templateUrl: './wheelForm.component.html',
  styleUrls: ['./wheelForm.component.css'],
  providers: [MessageService]
})
export class WheelFormComponent {

 constructor( private messageService : MessageService){  }


tyre : Tyre[];



postData(form:NgForm):void{
  console.log(" " + JSON.stringify(form.value) +" - "+ form.value);

  this.messageService.saveTyre(JSON.stringify(form.value));

  }

}