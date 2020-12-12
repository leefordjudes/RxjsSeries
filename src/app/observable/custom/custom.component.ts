import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  customObs1Status;
  customObs2Status;
  randomNamesObsStatus;
  names;
  customSubscription1: Subscription;
  customSubscription2: Subscription;
  randomNamesSubscription: Subscription;
  constructor(private _designUtilityService: DesignUtilityService) { }


  ngOnInit(): void {
    // Ex - 01 (Manual)
    const customObs1 = new Observable(observer => {
      setTimeout(()=>{
        observer.next('Angular');
      },1000);
      setTimeout(()=>{
        observer.next('Typescript');
      },2000);
      setTimeout(()=>{
        observer.next('Html & CSS');
        observer.complete();
      },3000);
      setTimeout(()=>{
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceed'));
      },4000);
      setTimeout(()=>{
        observer.next('Jquery');
      },5000);
    });

    this.customSubscription1 = customObs1.subscribe(
      (res: string) => {
      this._designUtilityService.addElement(res, 'elContainer1');
      },
      (err) => {
        this.customObs1Status = 'error';
      },
      () => {
        this.customObs1Status = 'completed';
      }
    );

    // Ex - 02 (Custom Interval)
    const Arr2 = ['0.Angular', '1.Typescript', '2.Html & CSS', '3.Javascript', '4.Jquery'];
    const customObs2 = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(Arr2[count]);
        
        if (count === 2) {
          observer.error('Error emit');
        }

        if (count === 4) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.customSubscription2 = customObs2.subscribe(
      (res: string)=>{
        this._designUtilityService.addElement(res, 'elContainer2');
      },
      (err) => {
        this.customObs2Status = 'error';
      },
      () => {
        this.customObs2Status = 'completed';
      }
    );

    // Ex - 03 (Random Names)
    const Arr3 = ['Aron','Bob','Canon', 'RxSeries', 'John', 'Alex', 'Jake'];
    const customObs3 = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(Arr3[count]);
        
        if (count === 3) {
          // observer.error('Error emit');
        }

        if (count === 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.randomNamesSubscription = customObs3.subscribe(
      (res: string) => {
        this.names = res;
      },
      (err) => {
        this.randomNamesObsStatus = 'error';
      },
      () => {
        this.randomNamesObsStatus = 'completed';
      }
    );
  }

  ngOnDestroy(): void {
    this.customSubscription1.unsubscribe();
    this.customSubscription2.unsubscribe();
    this.randomNamesSubscription.unsubscribe();
  }

}
