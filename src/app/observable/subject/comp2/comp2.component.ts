import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../../../app-services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit, OnDestroy {
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
