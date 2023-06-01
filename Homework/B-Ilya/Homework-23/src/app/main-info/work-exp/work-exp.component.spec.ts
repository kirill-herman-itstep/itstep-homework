import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpComponent } from './work-exp.component';

describe('WorkExpComponent', () => {
  let component: WorkExpComponent;
  let fixture: ComponentFixture<WorkExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExpComponent]
    });
    fixture = TestBed.createComponent(WorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
