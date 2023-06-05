import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListFullPageComponent } from './game-list-full-page.component';

describe('GameListFullPageComponent', () => {
  let component: GameListFullPageComponent;
  let fixture: ComponentFixture<GameListFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameListFullPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
