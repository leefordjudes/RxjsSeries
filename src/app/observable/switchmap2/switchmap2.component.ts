import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck, concatMap, filter } from 'rxjs/operators';
import { Search } from '../../app-interface/search.interface';
import { SearchService } from '../../app-services/search.service';

@Component({
  selector: 'app-switchmap2',
  templateUrl: './switchmap2.component.html',
  styleUrls: ['./switchmap2.component.scss']
})
export class Switchmap2Component implements OnInit, AfterViewInit {
  searchResults: Search;
  searchResultsCount: number;
  @ViewChild('searchForm') searchForm: NgForm;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this._searchService.getSearches('rxjs').subscribe(res => {
    //   console.log(res);
    // });
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      // map(data => data['searchTerm'])
      filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      concatMap(data => this._searchService.getSearches(data.trim()))
    ).subscribe(res => {
      // console.log(res);
      this.searchResults = res;
      // console.log('count =>', Object.keys(res).length);
      this.searchResultsCount = Object.keys(res).length;
    });
  }

}
