import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathFormComponent } from './math-form.component';

describe('MathFormComponent', () => {
  let component: MathFormComponent;
  let fixture: ComponentFixture<MathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
