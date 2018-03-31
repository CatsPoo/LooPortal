import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {

  private url:string="http://localhost:3000/get/";

  constructor(private http:Http) { }

  getData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url+'getData', {} , { headers: headers}).map(res=>res.json());
  }
}