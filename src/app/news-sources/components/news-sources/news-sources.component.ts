import { Component, OnInit } from '@angular/core';
import { NewsSourcesService } from '../../services/news-sources.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable, Subscription } from 'rxjs';
import { NewsSource } from '../../models/news-source.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.scss'],
})
export class NewsSourcesComponent implements OnInit {
  sources$: Observable<NewsSource[]>;
  paginatedSources$: Observable<NewsSource[]>;
  itemsPerPage$: Observable<number>;
  currentPage$: Observable<number>;
  searchTerm: string;
  categories$: Observable<string[]>;
  currentCategorySubscription: Subscription;
  currentCategory: string | null;

  constructor(private store: Store<fromStore.NewsSourcesFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromStore.loadNewsSources());
    this.sources$ = this.store.select(fromStore.getNewsSources);
    this.paginatedSources$ = this.store.select(fromStore.getNewsSourcesPage);
    this.itemsPerPage$ = this.store.select(fromStore.getItemsPerPage);
    this.currentPage$ = this.store.select(fromStore.getCurrentPage);
    this.categories$ = this.store.select(fromStore.getCategories);
    this.currentCategorySubscription = this.store
      .select(fromStore.getCurrentCategory)
      .subscribe((category) => (this.currentCategory = category));
  }

  handlePageEvent(event: PageEvent) {
    this.store.dispatch(
      fromStore.setCurrentPage({ currentPage: event.pageIndex })
    );
  }

  onSearchTermChange(searchTerm: string) {
    this.store.dispatch(fromStore.setSearchTerm({ searchTerm }));
  }

  onCategoryChange() {
    console.log(this.currentCategory);
    this.store.dispatch(
      fromStore.setCurrentCategory({ category: this.currentCategory! })
    );
  }

  clearFilters() {
    this.store.dispatch(fromStore.setCurrentCategory({ category: null }));
    this.store.dispatch(fromStore.setSearchTerm({ searchTerm: '' }));
  }
}
