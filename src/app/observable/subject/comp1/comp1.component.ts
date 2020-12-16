import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../../../app-services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {
  userName;
  sub1: Subscription;

  constructor(private _du: DesignUtilityService) {
    this.sub1 = this._du.userName$.subscribe((res:string) => {
      this.userName = res;
    });
   }

  ngOnInit(): void {}

  onChange(uname1: string) {
    this._du.setUserName(uname1);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
