import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  flag=true;
  constructor(private _designUtilityService: DesignUtilityService) { }

  @ViewChild('addBtn') addBtn:ElementRef;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      const val = `Video ${count++}`;
      if (this.flag) {
        this._designUtilityService.addElement(val,'elContainer1');
      } else {
        this._designUtilityService.addElement(val,'elContainer2');
      }
      this.flag = !this.flag;
    });
  }

  // addElement(val: string, containerId: string) {
  //   let el = document.createElement('li');
  //   el.innerText = val;
  //   document.getElementById(containerId).appendChild(el);
  // }


}
