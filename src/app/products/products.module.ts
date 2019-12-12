import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { TemplateDrivenProductFormComponent } from './components/template-driven-product-form/template-driven-product-form.component';
import { ReactiveProductFormComponent } from './components/reactive-product-form/reactive-product-form.component';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent, ProductWidgetComponent, ProductFormComponent, TemplateDrivenProductFormComponent, ReactiveProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CoreModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      addFlexToParent: false,
    })
  ],
})
export class ProductsModule { }
