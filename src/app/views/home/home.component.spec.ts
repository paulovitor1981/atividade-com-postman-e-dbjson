import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homecomponent } from './home.component';

describe('HomeComponent', () => {
  let component: homecomponent;
  let fixture: ComponentFixture<homecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homecomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(homecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
