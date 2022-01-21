import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
})
export class BlogComponent implements OnInit {
  theme: string = '';
  themeInverse: string = '';
  displayingPosts: any;
  errorMessage: string = '';
  currentURL: string = '';

  constructor(
    private themeService: ThemeService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentURL = this.router.url;
    this.themeService.setThemeFromCookie();
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );

    this.displayAll();
  }

  displayAll(): void {
    this.dataService.getAllBlogs().subscribe(
      (posts) => {
        this.displayingPosts = posts;
      },
      (err) => (this.errorMessage = err),
      () => {
        for (const post of this.displayingPosts) {
          post.timestamp = this.dataService.formatTime(post.timestamp);
          if (post.body.length > 150)
            post.body = post.body.substring(0, 150) + '...';
        }
      }
    );
  }
}
