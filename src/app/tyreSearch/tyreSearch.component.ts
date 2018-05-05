import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from "../../app/service/message.service";


@Component({
  selector: 'tyreSearch',
  templateUrl: './tyreSearch.component.html',
  styleUrls: ['./tyreSearch.component.css'],
  providers: [MessageService]

})


export class TyreSearchComponent implements OnInit{


constructor(private router: Router, private messageService : MessageService) { };

queryTyre:any;

 ngOnInit(){
        // this.getTyreDetails();
//    console.log(this.queryTyre);     
 }

 searchTyre(form:NgForm):void{

     console.log(form.value.tyreNum);
     if(form.value.tyreNum)
        this.router.navigateByUrl('/showwheel/'+form.value.tyreNum);
 }

}
