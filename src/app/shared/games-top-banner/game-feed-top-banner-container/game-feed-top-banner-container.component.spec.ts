import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeedTopBannerContainerComponent } from './game-feed-top-banner-container.component';

describe('GameFeedTopBannerContainerComponent', () => {
  let component: GameFeedTopBannerContainerComponent;
  let fixture: ComponentFixture<GameFeedTopBannerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFeedTopBannerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFeedTopBannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
