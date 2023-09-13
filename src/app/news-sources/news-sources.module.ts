import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSourcesComponent } from './components/news-sources/news-sources.component';
import { NewsSourcesRouterModule } from './news-sources.routing';

@NgModule({
  declarations: [NewsSourcesComponent],
  imports: [CommonModule, NewsSourcesRouterModule],
})
export class NewsSourcesModule {}
