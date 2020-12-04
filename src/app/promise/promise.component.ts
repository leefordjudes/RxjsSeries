import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  randomFlag: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

  definiteAction() {
    const randomNo = Math.floor(Math.random()*100)
    this.randomFlag = randomNo % 2 === 0;
    alert(`Action Completed, so, it is definite, Promise changed to ${this.randomFlag ? 'resolve':'reject'}`);
  }

  callToPromise() {
    let buyLaptop = new Promise((resolve, reject)=>{
      if (this.randomFlag) {
        resolve('promise is resolved')
      } else {
        reject('promise is rejected');
      }
    });
    buyLaptop.then(res => {
      alert(res);
    }).catch(err => {
      alert(err);
    });
  }

}
