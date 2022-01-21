import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
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
    this.dataService.getAllPosts().subscribe(
      (posts) => (this.displayingPosts = posts),
      (err) => (this.errorMessage = err),
      () => {
        // Post processing
        for (const post of this.displayingPosts) {
          post.timestamp = this.dataService.formatTime(post.timestamp);
          if (post.body.length > 150)
            post.body = post.body.substring(0, 150) + '...';
        }
      }
    );
  }
}
