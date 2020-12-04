import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) { }

  @HostBinding('class.show') isShow = false;
  
  @HostListener('document:click', ['$event']) 
  toggleShow(event: Event) {
    // console.log(event.target);
    this.isShow = this.elRef.nativeElement.contains(event.target) ? !this.isShow : false;
  }

}
