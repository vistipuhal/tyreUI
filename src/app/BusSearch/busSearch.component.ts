import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from "../../app/service/message.service";


@Component({
  selector: 'busSearch',
  templateUrl: './busSearch.component.html',
  styleUrls: ['./busSearch.component.css'],
  providers: [MessageService]

})


export class BusSearchComponent implements OnInit{


constructor(private router: Router, private messageService : MessageService) { };

 ngOnInit(){
        // this.getTyreDetails();
//    console.log(this.queryTyre);     
 }

 searchBus(form:NgForm):void{

     console.log(form.value.busNum);
     if(form.value.busNum)
       this.router.navigateByUrl('/showbus/'+form.value.busNum);
 }

}
