import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.scss']
})
export class ZipForkjoinComponent implements OnInit, AfterViewInit {

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
      take(4)
    );
    const color$ = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(3)
    );

    // Ex -01 ZIP

    zip(name$, color$).subscribe(([name, color]) =>{
      // console.log(name, color);
      this.createBox(name, color, 'elContainer1');
    });

    // Ex - 02 ForkJoin

    forkJoin([name$, color$]).subscribe(([name, color]) =>{
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
