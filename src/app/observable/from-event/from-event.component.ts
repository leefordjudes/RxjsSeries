import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit, OnDestroy {
  flag=true;
  eventSubscription: Subscription;
  constructor(private _designUtilityService: DesignUtilityService) { }


  @ViewChild('addBtn') addBtn:ElementRef;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let count = 1;
    this.eventSubscription = fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      const val = `Video ${count++}`;
      if (this.flag) {
        this._designUtilityService.addElement(val,'elContainer1');
      } else {
        this._designUtilityService.addElement(val,'elContainer2');
      }
      this.flag = !this.flag;
    });
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

}
