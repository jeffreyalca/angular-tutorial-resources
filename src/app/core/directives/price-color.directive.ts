import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPriceColor]'
})
export class PriceColorDirective {

  constructor(elemRef: ElementRef) {
    elemRef.nativeElement.style.backgroundColor = 'green';
    
  }

}
