import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardietaPage } from './creardieta.page';

describe('CreardietaPage', () => {
  let component: CreardietaPage;
  let fixture: ComponentFixture<CreardietaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreardietaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreardietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
