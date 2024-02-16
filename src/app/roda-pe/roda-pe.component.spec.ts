import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodaPeComponent } from './roda-pe.component';

describe('RodaPeComponent', () => {
  let component: RodaPeComponent;
  let fixture: ComponentFixture<RodaPeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodaPeComponent]
    });
    fixture = TestBed.createComponent(RodaPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
