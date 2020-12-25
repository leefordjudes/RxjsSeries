import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, mergeMap, concatMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.scss']
})
export class ConcatMap2Component implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  notifyData = [
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '4 Second Ago.',
      img: 'https://placeimg.com/50/50/tech/4',
      commenter: 'Alex Johnson',
      comment: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thanks...',
    },
    {
      name: 'Twitter',
      icon: 'assets/tw-icon.png',
      time: '3 Second Ago.',
      img: 'https://placeimg.com/50/50/tech/4',
      commenter: 'Alex Johnson',
      comment: 'Commented on your #Uxtrendz Post: Awesome Post !!! Thanks...',
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '2 Second Ago.',
      img: 'https://placeimg.com/50/50/tech/4',
      commenter: 'Alex Johnson',
      comment: 'Posted:  on your #Uxtrendz Post: Awesome Post !!! Thanks...',
    },
    {
      name: 'Twitter',
      icon: 'assets/tw-icon.png',
      time: '1 Second Ago.',
      img: 'https://placeimg.com/50/50/tech/4',
      commenter: 'Alex Johnson',
      comment: 'Twitted: on your #Uxtrendz Post: Awesome Post !!! Thanks...',
    }
  ];

  ngOnInit(): void {
    from(this.notifyData).pipe(
      // mergeMap(res => this.getHtml(res))
      concatMap(res => this.getHtml(res))
    ).subscribe(res => {
      console.log(res);
      this._du.addDivElement(res, 'elContainer');
    });
  }

  getHtml(data: any) {
    return of(`<div class="header">
      <div class="app">
        <img src="${data.icon}" width="20" class="pr-1"/>${data.name}
      </div>
      <div class="time">${data.time}</div>
    </div>
    <div class="body">
      <img class="rounded float-right" src="${data.img}"/>
      <strong>${data.commenter}</strong>
      <p>${data.comment}</p>
    </div>`).pipe(delay(2000));
  }

}
