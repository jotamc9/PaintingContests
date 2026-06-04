import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBody } from './calendar-body';

describe('CalendarBody', () => {
  let component: CalendarBody;
  let fixture: ComponentFixture<CalendarBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
