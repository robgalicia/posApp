import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComandaPage } from './registro-comanda.page';

describe('RegistroComandaPage', () => {
  let component: RegistroComandaPage;
  let fixture: ComponentFixture<RegistroComandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComandaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
