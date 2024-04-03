import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTotalComponent } from './historial-total.component';

describe('HistorialTotalComponent', () => {
  let component: HistorialTotalComponent;
  let fixture: ComponentFixture<HistorialTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialTotalComponent]
    });
    fixture = TestBed.createComponent(HistorialTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
