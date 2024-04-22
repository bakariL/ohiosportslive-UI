import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFeaturedPlayersComponent } from './homepage-featured-players.component';

describe('HomepageFeaturedPlayersComponent', () => {
  let component: HomepageFeaturedPlayersComponent;
  let fixture: ComponentFixture<HomepageFeaturedPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFeaturedPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFeaturedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
