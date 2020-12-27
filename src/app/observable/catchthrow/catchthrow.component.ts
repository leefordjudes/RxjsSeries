import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../app-services/design-utility.service';

@Component({
  selector: 'app-catchthrow',
  templateUrl: './catchthrow.component.html',
  styleUrls: ['./catchthrow.component.scss']
})
export class CatchthrowComponent implements OnInit {

  fetching:boolean = false;
  allProducts;
  error;

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
  }

  onGetProducts(){
    this.fetching = true;
    this._du.getProducts().subscribe(
      (res) => {
        this.allProducts = res;
        this.fetching = false;
      },
      (err) => {
        this.error = err;
        this.fetching = false;
      });
  }

  closeErrorAlert() {
    this.error = null;
  }


}
