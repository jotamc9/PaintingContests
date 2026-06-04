import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLayout } from './calendar-layout';

describe('CalendarLayout', () => {
  let component: CalendarLayout;
  let fixture: ComponentFixture<CalendarLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
