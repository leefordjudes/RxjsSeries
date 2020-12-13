import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subscription, from } from 'rxjs';
import { map, tap, take, pluck, retry, retryWhen, delay, scan } from 'rxjs/operators';

interface Person {
  id: string;
  name: string;
  email: string;
  gender: string;
  age: number;
  phone: string;
  picture: string;
  location: string;
}
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  person;
  fetching: boolean = false;
  status = 'No Data';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchDetails();
  }

  fetchDetails() {
    this.person = null;
    this.fetching = true;
    this.status = 'Fetching data...';
    // this.http.get('https://global-1bb0f.firebseio.com/user.json').subscribe(res => {
    this.http.get('https://randomuser.me/api/')
    .pipe(
      // retry(4),
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) =>{
          if(retryCount >= 5) {
            throw err;
          }
          retryCount = retryCount + 1;
          console.log('retry count => ',retryCount);
          this.status = 'Retrying Attempt #'+retryCount;
          return retryCount;
        },0)
      )),
      map((res: any) => res.results[0]),
    ).subscribe((res:any) => {
      console.log(res);
      this.person = {
        id: res.id.value || '<not specified>',
        name: res.name.title+'.'+res.name.first+' '+res.name.last,
        email: res.email,
        gender: res.gender,
        age: res.registered.age,
        phone: res.phone,
        picture: res.picture.large,
        location: res.location.country
      };
      this.status = 'Data Fetched.';
      this.fetching = false;
    },
    (err)=>{
      console.log(err);
      this.status = 'Problem in fetching data.';
      this.fetching = false;
    });
  }

}
