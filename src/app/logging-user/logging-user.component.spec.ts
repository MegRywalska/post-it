import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingUserComponent } from './logging-user.component';

describe('LoggingUserComponent', () => {
  let component: LoggingUserComponent;
  let fixture: ComponentFixture<LoggingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
