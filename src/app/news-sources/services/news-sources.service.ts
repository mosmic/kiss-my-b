import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsSource } from '../models/news-source.model';

const API_KEY = 'f129a785252f47379939657be9f9a0d7';

@Injectable({
  providedIn: 'root',
})
export class NewsSourcesService {
  private newsSourcesUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
  constructor(private http: HttpClient) {}

  getNewsSources(): Observable<NewsSource[]> {
    return this.http.get<NewsSource[]>(this.newsSourcesUrl);
  }
}
