import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string;
  sub1: Subscription;
  constructor(private _du: DesignUtilityService) { 
    this.sub1 = this._du.userName$.subscribe((res:string) => {
      this.userName = res;
    });
  }


  ngOnInit(): void {
    this._du.setExclusive(true);
  }

  ngOnDestroy(): void {
    this._du.setExclusive(false);
    this.sub1.unsubscribe();
  }

}
