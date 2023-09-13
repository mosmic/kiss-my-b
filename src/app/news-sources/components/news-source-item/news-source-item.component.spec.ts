import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourceItemComponent } from './news-source-item.component';

describe('NewsSourceItemComponent', () => {
  let component: NewsSourceItemComponent;
  let fixture: ComponentFixture<NewsSourceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSourceItemComponent]
    });
    fixture = TestBed.createComponent(NewsSourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
