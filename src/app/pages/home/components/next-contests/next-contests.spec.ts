import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextContests } from './next-contests';

describe('NextContests', () => {
  let component: NextContests;
  let fixture: ComponentFixture<NextContests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextContests],
    }).compileComponents();

    fixture = TestBed.createComponent(NextContests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
