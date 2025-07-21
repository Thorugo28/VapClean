import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCards } from './video-cards';

describe('VideoCards', () => {
  let component: VideoCards;
  let fixture: ComponentFixture<VideoCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
