import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {

  constructor(private _du: DesignUtilityService) { }
  user1list = [
    'Angular 1',
    'Angular 2'
  ];
  user2list = [];
  user3list = [];
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Toggle Properties
  methodInterval: boolean = false;

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  videoSubs: Subscription;
  ngOnInit(): void {
    this.sub1 = this._du.videoEmit.subscribe(res => {
      // console.log(res);
      this.user1list.push(res);
    });
  }

  toggleMethod() {
    const broadcastVideo = interval(1000);
    if(!this.methodInterval) {
      this.videoSubs = broadcastVideo.subscribe(res =>{
        this._du.videoEmit.next('video '+res);
      });
    } else {
      this.videoSubs?.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }

  onAddVideo(video: string) {
    // console.log(video);
    this._du.videoEmit.next(video);
  }

  user2Subscribe() {
    if(this.subscribeMode2) {
      this.sub2?.unsubscribe();
    } else {
      this.sub2 = this._du.videoEmit.subscribe(res => {
        this.user2list.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  user3Subscribe() {
    if(this.subscribeMode3) {
      this.sub3?.unsubscribe();
    } else {
      this.sub3 = this._du.videoEmit.subscribe(res => {
        this.user3list.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  ngOnDestroy() {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.videoSubs?.unsubscribe();
  }

}
