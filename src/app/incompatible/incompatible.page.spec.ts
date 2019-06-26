import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompatiblePage } from './incompatible.page';

describe('IncompatiblePage', () => {
  let component: IncompatiblePage;
  let fixture: ComponentFixture<IncompatiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompatiblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompatiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
