import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlifePage } from './nightlife.page';

describe('NightlifePage', () => {
  let component: NightlifePage;
  let fixture: ComponentFixture<NightlifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightlifePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
