import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComandaPage } from './list-comanda.page';

describe('ListComandaPage', () => {
  let component: ListComandaPage;
  let fixture: ComponentFixture<ListComandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComandaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
