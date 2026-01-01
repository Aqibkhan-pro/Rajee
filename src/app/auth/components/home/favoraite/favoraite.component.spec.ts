/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavoraiteComponent } from './favoraite.component';

describe('FavoraiteComponent', () => {
  let component: FavoraiteComponent;
  let fixture: ComponentFixture<FavoraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
