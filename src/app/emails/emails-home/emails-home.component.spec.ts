import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsHomeComponent } from './emails-home.component';

describe('EmailsHomeComponent', () => {
  let component: EmailsHomeComponent;
  let fixture: ComponentFixture<EmailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
