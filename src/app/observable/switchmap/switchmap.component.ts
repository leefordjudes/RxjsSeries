import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, switchAll, switchMap, mergeAll, mergeMap, concatMap, delay } from 'rxjs/operators';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getData(data: string) {
    return of(data +' Video uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    // source.pipe(
    //   map(res => this.getData(res))
    // ).subscribe(res => {
    //   this._du.addElement(res, 'elContainer1');
    // });

    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      this._du.addElement(res2, 'elContainer1');
    }));

    // Ex - 02 | Map + SwitchAll
    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    ).subscribe(res => {
      this._du.addElement(res, 'elContainer2');
    });

    // // Ex - 03 | SwitchMap
    source.pipe(
      switchMap(res => this.getData(res))
    ).subscribe(res => {
      // console.log(res);
      this._du.addElement(res, 'elContainer3');
    });

    // Ex - 04 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      this._du.addElement(res, 'elContainer4');
    });

    // Ex - 05 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res)),
    ).subscribe(res => {
      this._du.addElement(res, 'elContainer5');
    });

  }

}
