import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, merge } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DesignUtilityService } from '../../app-services/design-utility.service';


@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, OnDestroy {

  sub1: Subscription;

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(500).pipe(map(v=> `Tech video #${v+1}`),take(5));
    const sourceComedy = interval(1000).pipe(map(v=> `Comedy video #${v+1}`),take(3));
    const sourceNews = interval(1500).pipe(map(v=> `News video #${v+1}`),take(4));
    
    const FinalObs = merge(sourceTech, sourceComedy, sourceNews);
    this.sub1 = FinalObs.subscribe(res => {
      console.log(res);
      this._du.addElement(res, 'elContainer');
    });
  }

  ngOnDestroy() {
    this.sub1?.unsubscribe();
  }

}
