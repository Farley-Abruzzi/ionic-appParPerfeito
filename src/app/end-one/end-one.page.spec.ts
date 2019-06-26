import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOnePage } from './end-one.page';

describe('EndOnePage', () => {
  let component: EndOnePage;
  let fixture: ComponentFixture<EndOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
