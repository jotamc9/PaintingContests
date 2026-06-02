import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestCard } from './contest-card';

describe('ContestCard', () => {
  let component: ContestCard;
  let fixture: ComponentFixture<ContestCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContestCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
