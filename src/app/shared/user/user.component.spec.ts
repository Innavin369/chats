import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.ComponentComponent } from './user.component';

describe('User.ComponentComponent', () => {
  let component: User.ComponentComponent;
  let fixture: ComponentFixture<User.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
