import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsSourcesComponent } from './components/news-sources/news-sources.component';

const userSettingsRoutes: Routes = [
  {
    path: '',
    component: NewsSourcesComponent,
    data: { title: 'News Sources' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(userSettingsRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class NewsSourcesRouterModule {}
