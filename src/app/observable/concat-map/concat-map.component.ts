import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { mergeMap, concatAll, map, delay, concatMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../app-services/design-utility.service';
/*
ref: difference between mergeMap, concatMap 
https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff#:~:text=Use%20mergeMap%20if%20you%20simply,order%20is%20important%20to%20you.

To recap: map is for mapping ‘normal’ values to whatever format you need it to be. The return value will be wrapped in an Observable again, so you can keep using it in your data stream. When you have to deal with an ‘inner’ Observable it’s easier to use mergeMap, switchMap or concatMap. Use mergeMap if you simply want to flatten the data into one Observable, use switchMap if you need to flatten the data into one Observable but only need the latest value and use concatMap if you need to flatten the data into one Observable and the order is important to you.
*/
@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getData(data: string) {
    return of(data +' Video uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
  
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => {
      // console.log(res);
      this._du.addElement(res, 'elContainer1');
    });
  
 /*
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      console.log(res2);
    }));
  */

    // Ex - 02 | Map + ConcatAll
    // Ex - 02 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res => {
      // console.log(res);
      this._du.addElement(res, 'elContainer2');
    });

    /*
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(res => {
      console.log(res);
      this._du.addElement(res, 'elContainer2');
    });
    */

    // Ex - 03 | ConcatMap

    source.pipe(
      concatMap(res => this.getData(res)),
    ).subscribe(res => {
      // console.log(res);
      this._du.addElement(res, 'elContainer3');
    });
  }

}
