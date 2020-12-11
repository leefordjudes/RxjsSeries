import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, from, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit, OnDestroy {

  users = [
    {name: 'Anto', skill: 'Angular'},
    {name: 'Antony', skill: 'Javascript'},
    {name: 'Mark', skill: 'NestJS'},
    {name: 'Judes', skill: 'Node'},
    {name: 'Zuker', skill: 'Html'},
    {name: 'Berk', skill: 'Css'},
  ];
  sourceSub: Subscription;
  constructor() { }

  ngOnInit(): void {

    // Ex - 01
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
    });
    
    // Ex - 02
    const source2 = from(this.users);
    this.sourceSub = source2.pipe(
      toArray()
    )
    .subscribe(res =>{
      // console.log(res);
    });

    // Ex - 03
    const source3 = of(...this.users);
    this.sourceSub = source3.pipe(
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
    });
  }

  ngOnDestroy() {
    this.sourceSub.unsubscribe();
  }

}
