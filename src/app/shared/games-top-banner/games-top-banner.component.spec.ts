import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTopBannerComponent } from './games-top-banner.component';

describe('GamesTopBannerComponent', () => {
  let component: GamesTopBannerComponent;
  let fixture: ComponentFixture<GamesTopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesTopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
