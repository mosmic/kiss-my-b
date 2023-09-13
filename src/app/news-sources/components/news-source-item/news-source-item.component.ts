import { Component, Input, OnInit } from '@angular/core';
import { NewsSource } from '../../models/news-source.model';

@Component({
  selector: 'app-news-source-item',
  templateUrl: './news-source-item.component.html',
  styleUrls: ['./news-source-item.component.scss'],
})
export class NewsSourceItemComponent implements OnInit {
  @Input()
  newsSource: NewsSource;

  ngOnInit(): void {}
}
