import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndThreePage } from './end-three.page';

describe('EndThreePage', () => {
  let component: EndThreePage;
  let fixture: ComponentFixture<EndThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
