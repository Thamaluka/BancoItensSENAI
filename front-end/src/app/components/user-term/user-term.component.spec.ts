import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTermComponent } from './user-term.component';

describe('UserTermComponent', () => {
  let component: UserTermComponent;
  let fixture: ComponentFixture<UserTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
