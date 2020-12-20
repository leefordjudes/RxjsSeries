import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit, OnDestroy {
  asyncVideoEmit;
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    });
  }


  onAddVideo(video: string) {
    console.log(video);
    this._du.asyncVideoEmit.next(video);
  }

  onComplete() {
    this._du.asyncVideoEmit.complete();
  }

  ngOnDestroy() {

  }

}
