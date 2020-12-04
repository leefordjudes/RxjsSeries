import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {
  startTime;
  finishTime;
  promiseOne;
  ex1result;
  ex2result;
  ex3result;
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB', 
    color: 'Black',
  };
  constructor() { }

  ngOnInit(): void {
  }


  getAsyncData(val: number) {
    if(!isNaN(val) && val > 0) {
      this.startTime = new Date();
      console.log(`start time: ${this.startTime}`);
      this.getData(val)
        .then(data => {this.promiseOne = data;console.log(data)})
        .catch(err => {this.promiseOne = err;console.log(err)});
    }
  }

  async getData(val): Promise<string> {
    return await new Promise((resolve, reject) => {
      setTimeout(()=>{
        this.finishTime = new Date();
        console.log(`finish time: ${this.finishTime}`);
        const totalTime = Math.round((this.finishTime - this.startTime)/1000);
        if (Math.floor(Math.random()*10) % 2 === 1) {
          resolve(`promise resolved, Total Time: ${totalTime}`);
        } else {
          reject(`promise rejected, Total Time: ${totalTime}`);
        }
        console.log(`Total Time: ${totalTime}`);
      },val*1000);
    });
  }

  fetch1() {
    this.ex1result = 'Fetching Data...';
    let buyLaptop1 = new Promise((resolve, reject) => {
      setTimeout(() => {resolve(this.dell)}, 3000);
    });
    buyLaptop1.then(res => {
      this.ex1result = JSON.stringify(res);
    });
  }
  
  async fetch2() {
    this.ex2result = 'Fetching Data...';
    let buyLaptop2 = new Promise((resolve, reject) => {
      setTimeout(() => {resolve(this.dell)}, 3000);
    });
    
    const data = await buyLaptop2;
    this.ex2result = JSON.stringify(data);
    
  }

  async fetch3() {
    this.ex3result = 'Fetching Data...';
    const getPost = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());

    // Type 1 - using then

    // getPost.then(res => {
    //   this.ex3result = JSON.stringify(res[0].title);
    // });

    // Type 1 - using await
    const result = await getPost;
    this.ex3result = JSON.stringify(result[0].title);
  }

}
