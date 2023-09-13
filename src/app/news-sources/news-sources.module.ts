import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSourcesRouterModule } from './news-sources.routing';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as fromComponents from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    NewsSourcesRouterModule,
    StoreModule.forFeature('newsSources', reducers),
    EffectsModule.forFeature(effects),
    MatPaginatorModule,
    FormsModule,
  ],
  exports: [fromComponents.NewsSourcesComponent],
})
export class NewsSourcesModule {}
