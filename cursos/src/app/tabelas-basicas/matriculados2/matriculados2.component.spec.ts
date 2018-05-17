import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matriculados2Component } from './matriculados2.component';

describe('Matriculados2Component', () => {
  let component: Matriculados2Component;
  let fixture: ComponentFixture<Matriculados2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matriculados2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matriculados2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
