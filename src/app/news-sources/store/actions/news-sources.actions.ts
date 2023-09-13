import { createAction, props } from '@ngrx/store';
import { NewsSource } from '../../models/news-source.model';

export const loadNewsSources = createAction('[News Sources] Load News Sources');

export const loadNewsSourcesFail = createAction(
  '[News Sources] Load News Sources Fail',
  props<{ error: any }>()
);

export const loadNewsSourcesSuccess = createAction(
  '[News Sources] Load News Sources Success',
  props<{ sources: NewsSource[] }>()
);

export const setCurrentPage = createAction(
  '[News Sources] Set Current Page',
  props<{ currentPage: number }>()
);

export const setSearchTerm = createAction(
  '[News Sources] Set Search Term',
  props<{ searchTerm: string }>()
);

export const setCurrentCategory = createAction(
  '[News Sources] Set Current Category',
  props<{ category: string | null }>()
);
