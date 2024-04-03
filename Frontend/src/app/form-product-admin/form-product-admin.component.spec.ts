import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductAdminComponent } from './form-product-admin.component';

describe('FormProductAdminComponent', () => {
  let component: FormProductAdminComponent;
  let fixture: ComponentFixture<FormProductAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductAdminComponent]
    });
    fixture = TestBed.createComponent(FormProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
