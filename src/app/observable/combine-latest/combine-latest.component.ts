import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, zip } from 'rxjs';
import { map, pluck, take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  nameSource = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert', 'Sam'];
  colorSource = ['red', 'green', 'blue', 'yellow','violet', 'purple', 'grey'];
  @ViewChild('name', {static: true}) name:ElementRef;
  @ViewChild('color', {static: true}) color:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const name$ = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value),
    );
    const color$ = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
    );

    // Ex -01 COMBINE-LATEST

    combineLatest([name$, color$]).subscribe(([name, color]) =>{
      // console.log(name, color);
      this.createBox(name, color, 'elContainer1');
    });

    // Ex - 02 withLatestFrom
    name$.pipe(withLatestFrom(color$)).subscribe(([name, color]) =>{
      // console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    });
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', 'item '+color);
    document.getElementById(containerId).appendChild(el);
  }

}
