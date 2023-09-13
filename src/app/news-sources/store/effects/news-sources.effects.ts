import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import * as fromNewsSourcesActions from '../actions';
import {
  NewsSourcesResponse,
  NewsSourcesService,
} from '../../services/news-sources.service';

@Injectable()
export class NewsSourcesEffects {
  constructor(
    private actions$: Actions,
    private newsSourcesService: NewsSourcesService
  ) {}

  loadNewsSources$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromNewsSourcesActions.loadNewsSources),
      switchMap(() =>
        this.newsSourcesService.getNewsSources().pipe(
          map((res: NewsSourcesResponse) =>
            fromNewsSourcesActions.loadNewsSourcesSuccess({
              sources: res.sources,
            })
          ),
          catchError((error) => {
            return of(fromNewsSourcesActions.loadNewsSourcesFail({ error }));
          })
        )
      )
    )
  );
}
