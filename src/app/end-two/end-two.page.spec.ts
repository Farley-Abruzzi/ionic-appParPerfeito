import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTwoPage } from './end-two.page';

describe('EndTwoPage', () => {
  let component: EndTwoPage;
  let fixture: ComponentFixture<EndTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
