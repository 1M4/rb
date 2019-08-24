import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatalPage } from './estatal.page';

describe('EstatalPage', () => {
  let component: EstatalPage;
  let fixture: ComponentFixture<EstatalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
