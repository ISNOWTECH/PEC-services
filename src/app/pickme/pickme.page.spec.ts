import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickmePage } from './pickme.page';

describe('PickmePage', () => {
  let component: PickmePage;
  let fixture: ComponentFixture<PickmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickmePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
