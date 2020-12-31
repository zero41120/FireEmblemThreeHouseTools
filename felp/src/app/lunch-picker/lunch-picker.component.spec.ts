import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchPickerComponent } from './lunch-picker.component';

describe('LunchPickerComponent', () => {
  let component: LunchPickerComponent;
  let fixture: ComponentFixture<LunchPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
