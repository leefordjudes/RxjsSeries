import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  url = 'https://test-products-b05fe.firebaseio.com/products.json';

  constructor() { }

  ngOnInit(): void {
  }

}
