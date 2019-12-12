import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenProductFormComponent } from './template-driven-product-form.component';

describe('TemplateDrivenProductFormComponent', () => {
  let component: TemplateDrivenProductFormComponent;
  let fixture: ComponentFixture<TemplateDrivenProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
