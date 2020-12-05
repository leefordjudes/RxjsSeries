import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { lorem } from 'faker';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  broadcast;
  obsMsg;
  videoSubscription: Subscription;
  randomColor='black';
  randomBackColor='white';
  constructor() { }


  ngOnInit(): void {
    
  }

  broadCastVideos() {
    // interval(time in milliseconds)
    // timer(delay, interval)

    // this.broadcast = interval(1000);
    this.broadcast  = timer(1000, 1000);
    this.videoSubscription = this.broadcast.subscribe(res =>{
      this.randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      this.randomBackColor = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.random()})`;
      this.obsMsg = lorem.sentence();
      if(res >= 100) {
        this.videoSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.videoSubscription?.unsubscribe();
  }

}
