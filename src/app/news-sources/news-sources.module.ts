import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSourcesComponent } from './components/news-sources/news-sources.component';
import { NewsSourcesRouterModule } from './news-sources.routing';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [NewsSourcesComponent],
  imports: [
    CommonModule,
    NewsSourcesRouterModule,
    StoreModule.forFeature('newsSources', reducers),
    EffectsModule.forFeature(effects),
    MatPaginatorModule,
  ],
})
export class NewsSourcesModule {}
