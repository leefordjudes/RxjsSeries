import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { name } from 'faker';
import * as _ from 'lodash';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit, OnDestroy {
  obs1: Observable<string>;
  obs3: Observable<string[]>;
  obsMsg;
  obs1Subscription: Subscription;
  names = [];
  totalNames = 0;
  fromNames = [];
  totalFromNames = 0;
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // const names = [];
    for(let i=0; i<Math.floor(Math.random()*10);i++){
      this.names.push(name.firstName());
    }
    this.fromNames = this.names;
    this.totalNames = this.names.length;
    this.totalFromNames = this.fromNames.length;

    this.obs1 = of(...this.names);
    this.obs1Subscription = this.obs1.subscribe(res => {
      this._designUtilityService.addElement(res, 'elContainer1');
    });

    const obs2 = of({a:'Aron', b:'Bob', c:'Canon' })
    obs2.subscribe(res =>{
      this.obsMsg = res;
    });

    // from - array

    this.obs3 = from(this.names);
    this.obs3.subscribe((res: any) =>{
      this._designUtilityService.addElement(res, 'elContainer2');
    });

    // from - promise

    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Promise resolved');
      },3000);
    });
    // promise.then((res)=>{
    //   console.log(res);
    // });
    const obs4 = from(promise);
    obs4.subscribe((res: any) => {
      // console.log('from promise =>', res);
      this._designUtilityService.addElement(res, 'elContainer3');
    });

    // from - string
    const obs5 = from('String to Observable');
    obs5.subscribe((res: any) => {
      // console.log('from string =>', res);
      this._designUtilityService.addElement(res, 'elContainer4');
    });
  }

  readNames() {
    this._designUtilityService.clearElement('elContainer1');
    this.names.length = 0;
    for(let i=0; i<Math.floor(Math.random()*10);i++){
      this.names.push(name.firstName());
    }
    this.totalNames = this.names.length;
    this.obs1 = of(...this.names);
    this.obs1Subscription = this.obs1.subscribe(res => {
      this._designUtilityService.addElement(res, 'elContainer1');
    });
  }

  readFromNames() {
    this._designUtilityService.clearElement('elContainer2');
    this.fromNames.length = 0;
    for(let i=0; i<Math.floor(Math.random()*10);i++){
      this.fromNames.push(name.firstName());
    }
    this.totalFromNames = this.fromNames.length;
    this.obs3 = from(this.fromNames);
    this.obs3.subscribe((res: any) => {
      this._designUtilityService.addElement(res, 'elContainer2');
    });
  }

  ngOnDestroy() {
    this.obs1Subscription?.unsubscribe();
  }

}
