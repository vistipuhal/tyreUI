import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
// import { HttpClientModule } from '@angular/common/http';
import { Headers,Http,Response } from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
// import './rxjs-operators';
import { Tyre } from '../../app/tyre';
import { Bus } from '../../app/bus';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MessageService {

    tyreNum: any;
    constructor(private http: HttpClient) { }
    // tyre: Tyre;
    // private url = 'http://localhost:9180/tms';
    private url = 'https://tranquil-tor-20770.herokuapp.com/tms';

    private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': true 
    });

    getTyreDetails(req:any){
        console.log("service inovked");
        return this.http.get(this.url + "/findTyre/"+ req);
    }

    getBusDetails(req:any){
        console.log("service bus get inovked");
        return this.http.get(this.url + "/findBus/"+ req);
    }

    saveTyre(req){
        console.log("save req");
        return this.http.post<Tyre>(this.url + "/addTyre",req,httpOptions)
        .map(res => res).subscribe();
    }

    saveBus(req){
        console.log("save req2");
        return this.http.post<Bus>(this.url + "/addBus",req,httpOptions)
        .map(res => res).subscribe();
    }

    deleteTyre(req){
        console.log("delete tyre " + req );
        return this.http.get<Tyre>(this.url + "/deleteTyre/" + req )
        .map(res => res).subscribe();
        
    }

    deleteBus(req){
        console.log("delete bus " + req );
        return this.http.get<Bus>(this.url + "/deleteBus/" + req )
        .map(res => res).subscribe();
        
    }

}

