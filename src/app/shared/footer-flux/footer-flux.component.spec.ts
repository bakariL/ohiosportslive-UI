import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFluxComponent } from './footer-flux.component';

describe('FooterFluxComponent', () => {
  let component: FooterFluxComponent;
  let fixture: ComponentFixture<FooterFluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFluxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
