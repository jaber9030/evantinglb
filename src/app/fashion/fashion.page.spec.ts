import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionPage } from './fashion.page';

describe('FashionPage', () => {
  let component: FashionPage;
  let fixture: ComponentFixture<FashionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
