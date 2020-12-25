import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DesignUtilityService } from '../../app-services/design-utility.service';
import { fromEvent } from 'rxjs';
import { exhaustMap, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient, private _du: DesignUtilityService) { }

  fetching=false;
  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  saveRequest;
  @ViewChild('btn', {static: true}) btn:ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      // concatMap(() => this.onSave(this.num++))
      exhaustMap(() => this.onSave(++this.num))
    ).subscribe(res => {
      // console.log(res);
      this.onFetch();
      this.fetching = false;
    });
  }

  onSave(changes) {
    return this.http.put(this.url, {data: changes});
  }

  onFetch() {
    this.http.get<any>(this.url).subscribe((res:any) => {
      // console.log(res.data);
      this.saveRequest = res.data;
    });
  }

  // btnClick() {
  //   this.onSave(this.num++).subscribe(res => {
  //     console.log(res);
  //   });
  // }

}
