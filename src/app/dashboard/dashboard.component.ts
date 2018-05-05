import { Component, OnInit } from '@angular/core';
import { Tyre } from '../tyre';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

title = "dashboard"; 
                                    //get this from db hitting service
// tyre: Tyre = {
//     tyreNum : '2',
//     manufacDate : '2017-12-12',
//     busNum: 3,
//     busPos : 'rlr',
//     fitDate : 2017-12-12,
//     kms :222,
//     tyreTemp :12.0,
//     kmsRemoved:'11',
//     kmsFit:'1',
//     tyrePress: 22,
//     nsd1: 11.0,
//     nsd2: 11.0,
//     nsd3: 11.0,
//     tyreCondition: 'bead'
//     };

//   constructor() { }

//   ngOnInit() {
//   }

}