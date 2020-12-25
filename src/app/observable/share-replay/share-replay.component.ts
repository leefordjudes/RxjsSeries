import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  // url = 'https://test-products-b05fe.firebaseio.com/products.json';
  url = "https://my-json-server.typicode.com/leefordjudes/rxjsSeries/products";
  allProducts:Observable<any>;
  mobiles:Observable<any>;
  laptops:Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.allProducts = this.http.get(this.url).pipe(shareReplay());
    this.mobiles = this.allProducts.pipe(
      map(res => res.filter(data => data['type']==='mobile'))
    );
    this.laptops = this.allProducts.pipe(
      map(res => res.filter(data => data['type']==='laptop'))
    );
  }

}
