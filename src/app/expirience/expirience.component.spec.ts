import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirienceComponent } from './expirience.component';

describe('ExpirienceComponent', () => {
  let component: ExpirienceComponent;
  let fixture: ComponentFixture<ExpirienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpirienceComponent]
    });
    fixture = TestBed.createComponent(ExpirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
