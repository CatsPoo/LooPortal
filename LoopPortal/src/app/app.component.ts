import { AppDataService } from './../services/app-data-service/app-data.service';
import { ConnectionService } from './../services/connection-service/connection.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('stepper') stepper: MatHorizontalStepper;

  private currentBaseIndex = 0;
  private currentRouterIndex = 0;
  private currentSerialIndex = 0;

  private baseStepTitle="בחר/י בסיס";
  private routerStepTitle="בחר/י נתב";

  private baseFormGroup: FormGroup;
  private routerFormGroup: FormGroup;
  private serialsFormGroup: FormGroup;



  constructor(private connection: ConnectionService, private data: AppDataService, private _formBuilder: FormBuilder) {
    this.data.init(callback => { //get the data from the server
    });
  }

  ngOnInit() {

    this.baseFormGroup = this._formBuilder.group({
      baseCtrl: ['',Validators.required]
    });
    this.routerFormGroup = this._formBuilder.group({
      routerCtrl: ['', Validators.required]
    });
    this.serialsFormGroup = this._formBuilder.group({
      serialsCtrl: ['', Validators.required]
    });

  }

  baseChanged(ev){ //event emiitted when base radio has changed
    this.currentBaseIndex=ev.value;
    this.currentRouterIndex=0;
    this.currentSerialIndex=0;

    this.stepper.next(); //move to next step
    this.baseStepTitle=this.data.bases[this.currentBaseIndex].name;
  
  }

  routerChanged(ev){ //event emiitted when router radio has changed
    this.currentRouterIndex=ev.value;
    this.currentSerialIndex=0;

    this.stepper.next(); //move to next step
    this.routerStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].name
  }
  serialChanged(ev){
    this.currentSerialIndex=ev.value; 
  }

  baseNavClick(e){
    this.baseStepTitle=this.data.bases[this.currentBaseIndex].name;
  }

  routerNavClick(e){
    if(e.srcElement.classList[0]=="routerNext"){
      this.routerStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].name;
    }
    else{
      this.routerStepTitle="בחר/י נתב";
    }
  }

  checkLoop(ev){
    // TODO send request to the server to check loop
  }
}
