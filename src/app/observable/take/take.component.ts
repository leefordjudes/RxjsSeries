import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription, timer, of, from, Observable, fromEvent } from 'rxjs';
import { take, tap, map, takeLast, takeUntil, takeWhile } from 'rxjs/operators';
import { name } from 'faker';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit, OnDestroy {

  subs1: Subscription;
  constructor(private _du: DesignUtilityService) { }
  condition: Observable<any>;
  @ViewChild('addBtn', {static: true}) addBtn:ElementRef;

  ngOnInit(): void {
    // use timer or fromEvent to fill the condition
    // this.condition = timer(5000);
    // this.condition = fromEvent(document, 'click');
    this.condition = fromEvent(this.addBtn.nativeElement, 'click');

    // Ex - 01 | Take
    const source1 = interval(1000).pipe(
      map(x => `${x+1}. ${name.firstName()}`),
      take(10)
    );

    this.subs1 = source1.subscribe(res => {
      this._du.addElement(res, 'elContainer1');
    });

    // Ex - 02 | TakeLast
    this.subs1 = source1.pipe(takeLast(5)).subscribe(res => {
      this._du.addElement(res, 'elContainer2');
    });

    // Ex - 03 | TakeLast
    this.subs1 = source1.pipe(takeUntil(this.condition)).subscribe(res => {
      this._du.addElement(res, 'elContainer3');
    });

    // Ex - 04 | TakeWhile
    this.subs1 = source1.pipe(takeWhile(x => x.length >= 8)).subscribe(res => {
      this._du.addElement(res, 'elContainer4');
    });
  }

  ngOnDestroy(): void {
    this.subs1?.unsubscribe();
  }

}
