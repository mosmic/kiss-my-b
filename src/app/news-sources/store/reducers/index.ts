import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromNewsSources from './news-sources.reducer';
import { NewsSource } from '../../models/news-source.model';

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

export const getCurrentPage = createSelector(
  getNewsSourcesState,
  fromNewsSources.getCurrentPage
);

export const getSearchTerm = createSelector(
  getNewsSourcesState,
  fromNewsSources.getSearchTerm
);

export const getFilteredNewsSources = createSelector(
  getNewsSources,
  getSearchTerm,
  (sources, searchTerm) => {
    if (!searchTerm) {
      return sources;
    }
    const filteredArray = sources.filter((source) => {
      console.log(searchTerm);
      return source.name.toLocaleLowerCase().includes(searchTerm);
    });

    return filteredArray;
  }
);

export const getItemsPerPage = createSelector(
  getNewsSourcesState,
  fromNewsSources.getItemsPerPage
);

export const getNewsSourcesPage = createSelector(
  getFilteredNewsSources,
  getCurrentPage,
  getItemsPerPage,
  (sources, page, itemsPerPage) => {
    if (!sources || page == undefined || !itemsPerPage) {
      return [];
    }

    console.log(sources);

    let offset = (page - 1) * itemsPerPage;

    const paginatedItems = sources.slice(offset).slice(0, itemsPerPage);

    return paginatedItems;
  }
);
