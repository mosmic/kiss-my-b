import { Component, OnInit } from '@angular/core';
import { NewsSourcesService } from '../../services/news-sources.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store<fromStore.NewsSourcesFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromStore.loadNewsSources());
    this.sources$ = this.store.select(fromStore.getNewsSources);

    this.paginatedSources$ = this.store.select(fromStore.getNewsSourcesPage);

    this.itemsPerPage$ = this.store.select(fromStore.getItemsPerPage);

    this.currentPage$ = this.store.select(fromStore.getCurrentPage);
  }

  handlePageEvent(event: PageEvent) {
    this.store.dispatch(
      fromStore.setCurrentPage({ currentPage: event.pageIndex })
    );
  }
}
