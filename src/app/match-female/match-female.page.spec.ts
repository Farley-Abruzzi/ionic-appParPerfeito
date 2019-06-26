import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFemalePage } from './match-female.page';

describe('MatchFemalePage', () => {
  let component: MatchFemalePage;
  let fixture: ComponentFixture<MatchFemalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFemalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFemalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
