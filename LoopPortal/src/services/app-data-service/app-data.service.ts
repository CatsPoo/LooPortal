import { ConnectionService } from './../connection-service/connection.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppDataService {

  private _bases: Base[];
  
  constructor(private connection:ConnectionService){
    this._bases=[];
  }

  set bases(base){this._bases=base;}
  get bases(){return this._bases;}

  public addBase(base:Base){
    this._bases.push(base);
  }

  public init(callback){
    this.connection.getData().subscribe(res => {
      //console.log(res.data);
       res.data.bases.forEach(base => {
         let tempBase=new Base(base.index,base.name+"",base.number);
         
         base.routers.forEach(router => {
           
          let tempRouter=new Router(router.index,router.name,router.address); //converts to res to router
          router.serials.forEach(serial => {           
            let tempSerial=new Serial(serial.index,serial.name,serial.isActive,serial.description); //convers res to serial
            tempRouter.addSerial(tempSerial); //insert the serial to the routerws serials list
           });
           tempBase.addrouter(tempRouter); //insert the routers with the serials to base
         });
         this.addBase(tempBase); //inset the base with the routers and the serials to appData bases list
       });
       callback();
    });
  }

}
export class Serial{
  constructor( private _index:number, private _name:string, private _isActive:boolean, private _description:string){}

  get index(){return this._index;}
  get name(){return this._name;}
  get isActive(){return this.isActive;}
  get description(){return this._description;}
}

export class Router{
  private _serials:Serial[];
  constructor( private _index:number, private _name:string, private _address:string){
    this._serials=[];
  }

  set serials(ser){this._serials=ser};

  get index(){return this._index;}
  get name(){return this._name;}
  get address(){return this._address;}
  get serials(){return this._serials;}

  public addSerial(ser:Serial){
    this._serials.push(ser);
  }
}

export class Base{

  private _routers: Router[];
  constructor(private _index:number,private _name:string, private _number:number){
    this._routers=[];
  }

  get index(){return this._index;}
  get name(){return this._name;}
  get number(){return this._number;}
  get routers() {return this._routers;}

  public addrouter(router){
    this._routers.push(router);
  }
}
