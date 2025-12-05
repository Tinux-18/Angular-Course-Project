import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') click(eventData: Event) {
    this.elRef.nativeElement.classList.toggle('open');
  }
}
