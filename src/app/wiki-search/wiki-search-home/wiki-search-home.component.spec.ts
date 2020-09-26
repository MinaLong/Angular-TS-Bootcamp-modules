import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchHomeComponent } from './wiki-search-home.component';

describe('WikiSearchHomeComponent', () => {
  let component: WikiSearchHomeComponent;
  let fixture: ComponentFixture<WikiSearchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiSearchHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
