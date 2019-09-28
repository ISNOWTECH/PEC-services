import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDoctorPage } from './date-doctor.page';

describe('DateDoctorPage', () => {
  let component: DateDoctorPage;
  let fixture: ComponentFixture<DateDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDoctorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
