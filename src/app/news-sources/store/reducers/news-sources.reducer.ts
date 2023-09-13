import { Action, createReducer, on } from '@ngrx/store';
import { NewsSource } from '../../models/news-source.model';
import * as fromNewsSources from '../actions/news-sources.actions';

export interface NewsSourcesState {
  readonly newsSources: NewsSource[];
  readonly newsSourcesLoading: boolean;
  readonly newsSourcesLoaded: boolean;
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly totalPages: number | null;
  readonly searchTerm: string | null;
  readonly categories: string[];
  readonly currentCategory: string | null;
}

export const initialState: NewsSourcesState = {
  newsSources: [],
  newsSourcesLoading: false,
  newsSourcesLoaded: false,
  itemsPerPage: 6,
  currentPage: 0,
  totalPages: null,
  searchTerm: null,
  categories: [],
  currentCategory: null,
};

const newsSourcesReducer = createReducer(
  initialState,
  on(fromNewsSources.loadNewsSources, (state) => ({
    ...state,
    newsSourcesLoading: true,
    newsSourcesLoaded: false,
  })),
  on(fromNewsSources.loadNewsSourcesFail, (state, { error }) => ({
    ...state,
    newsSourcesLoading: false,
    newsSourcesLoaded: false,
  })),
  on(fromNewsSources.loadNewsSourcesSuccess, (state, { sources }) => ({
    ...state,
    newsSources: sources,
    totalPages: Math.ceil(sources.length / state.itemsPerPage),
    categories: [...new Set(sources.map((item) => item.category))],
    newsSourcesLoading: false,
    newsSourcesLoaded: true,
  })),
  on(fromNewsSources.setCurrentPage, (state, { currentPage }) => ({
    ...state,
    currentPage,
  })),
  on(fromNewsSources.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(fromNewsSources.setCurrentCategory, (state, { category }) => ({
    ...state,
    currentCategory: category,
  }))
);

export function reducer(state: NewsSourcesState | undefined, action: Action) {
  return newsSourcesReducer(state, action);
}

export const getNewsSources = (state: NewsSourcesState) => state.newsSources;
export const getNewsSourcesLoading = (state: NewsSourcesState) =>
  state.newsSourcesLoading;
export const getNewsSourcesLoaded = (state: NewsSourcesState) =>
  state.newsSourcesLoaded;
export const getCurrentPage = (state: NewsSourcesState) => state.currentPage;
export const getItemsPerPage = (state: NewsSourcesState) => state.itemsPerPage;
export const getSearchTerm = (state: NewsSourcesState) => state.searchTerm;
export const getCategories = (state: NewsSourcesState) => state.categories;
export const getCurrentCategory = (state: NewsSourcesState) =>
  state.currentCategory;
