import { AppDataService } from './../services/app-data-service/app-data.service';
import { ConnectionService } from './../services/connection-service/connection.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private currentBaseIndex=0;
  private currentRouterIndex=0;
  private currentSerialIndex=0;


  baseFormGroup: FormGroup;
  routerFormGroup: FormGroup;


  constructor(private connection: ConnectionService, private data: AppDataService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.data.init(callback => {
    });

    this.baseFormGroup = this._formBuilder.group({
      baseCtrl: ['']
    });
    this.routerFormGroup = this._formBuilder.group({
      routerCtrl: ['', Validators.required]
    });

  }

  baseChanged(ev){
    this.currentBaseIndex=ev.value;
    this.currentRouterIndex=0;
    this.currentSerialIndex=0;
  }

  routerChanged(ev){
    console.log(ev.value);
    this.currentRouterIndex=ev.value;
    this.currentSerialIndex=0;
  }
  serialChanged(ev){
    this.currentSerialIndex=ev.value;
  }
}
