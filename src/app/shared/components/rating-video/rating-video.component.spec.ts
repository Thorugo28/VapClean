import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingVideoComponent } from './rating-video.component';

describe('RatingVideoComponent', () => {
  let component: RatingVideoComponent;
  let fixture: ComponentFixture<RatingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
