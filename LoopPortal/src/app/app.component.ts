import { AppDataService, Serial } from './../services/app-data-service/app-data.service';
import { ConnectionService } from './../services/connection-service/connection.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatHorizontalStepper, MatRadioGroup } from '@angular/material';


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
  private serialStepTitle="בחר/י סיריאל";

  private baseFormGroup: FormGroup;
  private routerFormGroup: FormGroup;
  private serialsFormGroup: FormGroup;

  private getLoopData:boolean=false;
  private loopResult:string="";



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

    console.log("aaa");

    this.stepper.next(); //move to next step
    this.baseStepTitle=this.data.bases[this.currentBaseIndex].name;
  
  }

  baseNavClick(e){ //when click on base step navigation button
    this.baseStepTitle=this.data.bases[this.currentBaseIndex].name;
  }

  routerChanged(ev){ //event emiitted when router radio has changed
    this.currentRouterIndex=ev.value;
    this.currentSerialIndex=0;

    console.log(ev.value);

    this.stepper.next(); //move to next step
    this.routerStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].name
  }

  routerNavClick(e,x){//when click on router navigation buttons
    if(e.srcElement.classList[0]=="routerNext"){ //ckick on next
      this.routerStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].name;
    }
    else{ //click on prev
      this.routerStepTitle="בחר/י נתב";
      this.currentRouterIndex=0;
      
    }
  }

  serialChanged(ev){ //whn change the serial radio selection
    this.currentSerialIndex=ev.value; 
    this.serialStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].serials[this.currentRouterIndex].name;
    this.stepper.next(); //move to next step
    this.checkLoop();
  }

  serialNavClick(e){//when click on serial navigation buttons
    if(e.srcElement.classList[0]=="serialNext"){ //ckick on next
      this.serialStepTitle=this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].serials[this.currentRouterIndex].name;
      this.checkLoop();
    }
    else{ //click on prev
      //this.StepTitle="בחר/י נתב";
    }
  }

  checkLoop() {
    // TODO send request to the server to check loop
    this.connection.checkLoop(this.data.bases[this.currentBaseIndex].routers[this.currentRouterIndex].address
      ,"se0").subscribe(res => {
        this.getLoopData = true;
        this.loopResult = res.loopData;
        console.log(res.loopData);
      });
  }
}
