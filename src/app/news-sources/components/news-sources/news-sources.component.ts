import { Component, OnInit } from '@angular/core';
import { NewsSourcesService } from '../../services/news-sources.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.scss'],
})
export class NewsSourcesComponent implements OnInit {
  constructor(private store: Store<fromStore.NewsSourcesFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromStore.loadNewsSources());
    this.store
      .select(fromStore.getNewsSources)
      .subscribe((data) => console.log(data));

    this.store
      .select(fromStore.getNewsSourcesPage)
      .subscribe((data) => console.log(data));
  }
}
