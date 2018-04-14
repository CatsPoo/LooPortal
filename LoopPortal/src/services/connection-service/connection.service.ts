import { Serial } from './../app-data-service/app-data.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {

private url:string="http://84.108.39.139:3000/get/";
  //private url:string="http://192.168.1.13:3000/get/";
  //private url:string="http://localhost:3000/get/";

  constructor(private http:Http) { }

  getData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getData', {} , { headers: headers}).map(res=>res.json());
  }

  checkLoop(_address:string,_serial:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'checkLoop', {address:_address,serial:_serial} , { headers: headers}).map(res=>res.json());
  }
}