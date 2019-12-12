import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-product-form',
  templateUrl: './reactive-product-form.component.html',
  styleUrls: ['./reactive-product-form.component.scss']
})
export class ReactiveProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      cost: [null, Validators.required],
      quantity: [null, Validators.required]
    });
  }
}
