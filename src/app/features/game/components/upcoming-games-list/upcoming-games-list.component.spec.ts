import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGamesListComponent } from './upcoming-games-list.component';

describe('UpcomingGamesListComponent', () => {
  let component: UpcomingGamesListComponent;
  let fixture: ComponentFixture<UpcomingGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingGamesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
