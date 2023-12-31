import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsSource } from '../models/news-source.model';

const API_KEY = 'f129a785252f47379939657be9f9a0d7';

export interface NewsSourcesResponse {
  status: string;
  sources: NewsSource[];
}

@Injectable({
  providedIn: 'root',
})
export class NewsSourcesService {
  private newsSourcesUrl = `https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${API_KEY}`;
  constructor(private http: HttpClient) {}

  getNewsSources(): Observable<NewsSourcesResponse> {
    return this.http.get<NewsSourcesResponse>(this.newsSourcesUrl);
  }
}
