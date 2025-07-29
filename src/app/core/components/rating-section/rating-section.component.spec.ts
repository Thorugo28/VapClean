import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingSectionComponent } from './rating-section.component';

describe('RatingSectionComponent', () => {
  let component: RatingSectionComponent;
  let fixture: ComponentFixture<RatingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
