import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMapPage } from './pick-map.page';

describe('PickMapPage', () => {
  let component: PickMapPage;
  let fixture: ComponentFixture<PickMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
