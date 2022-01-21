import { ThemeService } from '../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  theme: string = '';
  themeInverse: string = '';
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setThemeFromCookie();
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );
  }

  linkTo(page: string) {
    switch (page) {
      case 'apache':
        window.open('https://httpd.apache.org/');
        break;
      case 'angular':
        window.open('https://angular.io');
        break;
      case 'bulma':
        window.open('https://bulma.io');
        break;
      case 'golang':
        window.open('https://golang.org/');
        break;
      default:
        alert('to be determined');
        break;
    }
  }
}
