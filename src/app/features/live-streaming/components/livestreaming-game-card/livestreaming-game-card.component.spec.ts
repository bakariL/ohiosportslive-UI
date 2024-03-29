import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamingGameCardComponent } from './livestreaming-game-card.component';

describe('LivestreamingGameCardComponent', () => {
  let component: LivestreamingGameCardComponent;
  let fixture: ComponentFixture<LivestreamingGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamingGameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivestreamingGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
