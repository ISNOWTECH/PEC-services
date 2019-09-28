import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingaPage } from './landinga.page';

describe('LandingaPage', () => {
  let component: LandingaPage;
  let fixture: ComponentFixture<LandingaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
