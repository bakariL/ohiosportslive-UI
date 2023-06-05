import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousGamesListComponent } from './previous-games-list.component';

describe('PreviousGamesListComponent', () => {
  let component: PreviousGamesListComponent;
  let fixture: ComponentFixture<PreviousGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousGamesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
