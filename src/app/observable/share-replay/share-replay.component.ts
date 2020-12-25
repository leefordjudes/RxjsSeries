import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  // url = 'https://test-products-b05fe.firebaseio.com/products.json';
  url = "https://my-json-server.typicode.com/leefordjudes/rxjsSeries/products";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      console.log(res);
    });
  }

}
