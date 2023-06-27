import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadInfoComponent } from './head-info.component';

describe('HeadInfoComponent', () => {
  let component: HeadInfoComponent;
  let fixture: ComponentFixture<HeadInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadInfoComponent]
    });
    fixture = TestBed.createComponent(HeadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
