import { Component, OnInit } from '@angular/core';
import { NewsSourcesService } from '../../services/news-sources.service';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.component.html',
  styleUrls: ['./news-sources.component.scss'],
})
export class NewsSourcesComponent implements OnInit {
  constructor(private newsSourcesService: NewsSourcesService) {}

  ngOnInit(): void {
    this.newsSourcesService
      .getNewsSources()
      .subscribe((data) => console.log(data));
  }
}
