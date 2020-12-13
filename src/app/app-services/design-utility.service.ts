import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  addElement(val: string, containerId: string) {
    let el:HTMLLIElement = document.createElement('li');
    el.innerText = val;
    if (el !== null) {
      document.getElementById(containerId)?.appendChild(el);
    }
  }

  clearElement(containerId: string) {
    document.getElementById(containerId).innerHTML='';
  }
}
