import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen = false;
  rxjsDropdownOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNavToggle() {
    this.navOpen = !this.navOpen;
  }

  onRxJsToggle() {
    this.rxjsDropdownOpen = !this.rxjsDropdownOpen;
  }
}
