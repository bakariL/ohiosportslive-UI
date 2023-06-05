import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGameTopDdlComponent } from './upcoming-game-top-ddl.component';

describe('UpcomingGameTopDdlComponent', () => {
  let component: UpcomingGameTopDdlComponent;
  let fixture: ComponentFixture<UpcomingGameTopDdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingGameTopDdlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingGameTopDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
