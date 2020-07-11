import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSummaryComponent } from './about-me-summary.component';

describe('AboutMeSummaryComponent', () => {
  let component: AboutMeSummaryComponent;
  let fixture: ComponentFixture<AboutMeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
