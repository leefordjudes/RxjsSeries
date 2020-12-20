import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  private exclusiveSubject = new Subject<boolean>();
  exclusive$ = this.exclusiveSubject.asObservable();

  private userNameSubject = new BehaviorSubject<string>('Akai');
  userName$ = this.userNameSubject.asObservable();

  videoEmit = new ReplaySubject<string>(3, 2000);
  asyncVideoEmit = new AsyncSubject();

  constructor() {}

  addElement(val: string, containerId: string) {
    let el:HTMLLIElement = document.createElement('li');
    el.innerText = val;
    if (el !== null) {
      document.getElementById(containerId)?.appendChild(el);
    }
  }

  clearElement(containerId: string) {
    document.getElementById(containerId).innerHTML='';
  }

  setExclusive(val: boolean) {
    this.exclusiveSubject.next(val);
  }
  setUserName(val: string) {
    this.userNameSubject.next(val);
  }
}
