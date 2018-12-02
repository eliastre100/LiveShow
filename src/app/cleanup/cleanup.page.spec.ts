import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupPage } from './cleanup.page';

describe('CleanupPage', () => {
  let component: CleanupPage;
  let fixture: ComponentFixture<CleanupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
