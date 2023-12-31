import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourcesComponent } from './news-sources.component';

describe('NewsSourcesComponent', () => {
  let component: NewsSourcesComponent;
  let fixture: ComponentFixture<NewsSourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSourcesComponent]
    });
    fixture = TestBed.createComponent(NewsSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
