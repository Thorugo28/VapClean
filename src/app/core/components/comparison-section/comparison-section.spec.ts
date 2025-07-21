import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonSection } from './comparison-section';

describe('ComparisonSection', () => {
  let component: ComparisonSection;
  let fixture: ComponentFixture<ComparisonSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
