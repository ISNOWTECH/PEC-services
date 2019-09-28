import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDatePage } from './init-date.page';

describe('InitDatePage', () => {
  let component: InitDatePage;
  let fixture: ComponentFixture<InitDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitDatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
