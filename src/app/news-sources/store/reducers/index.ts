import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromNewsSources from './news-sources.reducer';

export interface NewsSourcesFeatureState {
  newsSources: fromNewsSources.NewsSourcesState;
}

export const reducers: ActionReducerMap<NewsSourcesFeatureState> = {
  newsSources: fromNewsSources.reducer,
};

export const getNewsSourcesFeatureState =
  createFeatureSelector<NewsSourcesFeatureState>('newsSources');

export const getNewsSourcesState = createSelector(
  getNewsSourcesFeatureState,
  (state: NewsSourcesFeatureState) => state.newsSources
);

export const getNewsSources = createSelector(
  getNewsSourcesState,
  fromNewsSources.getNewsSources
);

export const getNewsSourcesLoading = createSelector(
  getNewsSourcesState,
  fromNewsSources.getNewsSourcesLoading
);

export const getNewsSourcesLoaded = createSelector(
  getNewsSourcesState,
  fromNewsSources.getNewsSourcesLoaded
);
