import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeedTopComponent } from './game-feed-top.component';

describe('GameFeedTopComponent', () => {
  let component: GameFeedTopComponent;
  let fixture: ComponentFixture<GameFeedTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFeedTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFeedTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
