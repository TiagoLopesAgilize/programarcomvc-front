import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTelefonica02Component } from './lista-telefonica-02.component';

describe('ListaTelefonica02Component', () => {
  let component: ListaTelefonica02Component;
  let fixture: ComponentFixture<ListaTelefonica02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelefonica02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelefonica02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
