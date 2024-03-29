import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamingPreviousGameCardComponent } from './livestreaming-previous-game-card.component';

describe('LivestreamingPreviousGameCardComponent', () => {
  let component: LivestreamingPreviousGameCardComponent;
  let fixture: ComponentFixture<LivestreamingPreviousGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamingPreviousGameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivestreamingPreviousGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
