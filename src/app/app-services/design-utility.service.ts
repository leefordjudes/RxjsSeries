import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

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

  constructor(private http: HttpClient, private _errService: ErrorService) {}

  addElement(val: any, containerId: string) {
    let el:HTMLLIElement = document.createElement('li');
    el.innerText = val;
    if (el !== null) {
      document.getElementById(containerId)?.appendChild(el);
    }
  }

  addDivElement(val: any, containerId: string) {
    let el = document.createElement('div');
    el.setAttribute('class','item');
    el.innerHTML = val;
    if (el !== null) {
      document.getElementById(containerId)?.prepend(el);
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

  url = 'https://test-products-b05fe.firebaseio.com/products.json';
  // url = "https://my-json-server.typicode.com/leefordjudes/rxjsSeries/app-jsondb/videoList";

  getProducts():Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this._errService.handleError));
  }

}
