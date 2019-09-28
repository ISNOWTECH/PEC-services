import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingbPage } from './landingb.page';

describe('LandingbPage', () => {
  let component: LandingbPage;
  let fixture: ComponentFixture<LandingbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
