import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSiteComponent } from './left-site.component';

describe('LeftSiteComponent', () => {
  let component: LeftSiteComponent;
  let fixture: ComponentFixture<LeftSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSiteComponent]
    });
    fixture = TestBed.createComponent(LeftSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
