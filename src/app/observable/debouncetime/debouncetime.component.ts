import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit {

  @ViewChild('myInput1', {static: true}) myInput1:ElementRef;
  @ViewChild('myInput2', {static: true}) myInput2:ElementRef;
  reqData1 = null;
  reqData2 = null;
  constructor(private loadingBar: LoadingBarService) { 
    
  }

  ngOnInit(): void {
    const state = this.loadingBar.useRef('router');
    
    const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    );
    searchTerm1.subscribe(res => {
      console.log(res);
      this.reqData1 = res;
      state.start();

      setTimeout(() => {
        this.reqData1 = null;
        state.complete();
      }, 1000);
    });
    
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 = res;
      state.start();

      setTimeout(() => {
        this.reqData2 = null;
        state.complete();
      }, 1000);
    });
  }

}
