import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysGamesListComponent } from './todays-games-list.component';

describe('TodaysGamesListComponent', () => {
  let component: TodaysGamesListComponent;
  let fixture: ComponentFixture<TodaysGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysGamesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
