import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceColorDirective } from './directives/price-color.directive';

@NgModule({
  declarations: [PriceColorDirective],
  imports: [
    CommonModule
  ],
  exports: [PriceColorDirective],
})
export class CoreModule { }
