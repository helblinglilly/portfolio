import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { DataService, Post } from '../../services/data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass'],
})
export class BlogDetailComponent implements OnInit {
  theme: string = '';
  themeInverse: string = '';
  id: string = '';
  collection!: any;
  self: any;
  error: string = '';

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.themeService.setThemeFromCookie();
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!.toString();
    });
    this.fetchPost();
  }

  fetchPost(): void {
    this.dataService.getBlog(this.id).subscribe(
      (postData) => {
        this.collection = postData;
        for (let post of this.collection) {
          post.timestamp = this.dataService.formatTime(post.timestamp);
          this.self = post;
        }
      },
      (err) => (this.error = err)
    ),
      () => {
        // Post processing
      };
  }
}
