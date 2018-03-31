import { AppDataService } from './../services/app-data-service/app-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatRadioModule, MatStepperModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpModule, Headers } from '@angular/http';
import { ConnectionService } from '../services/connection-service/connection.service';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    HttpModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    ConnectionService,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
