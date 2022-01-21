import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  theme: string = '';
  themeInverse: string = '';

  constructor(
    private themeService: ThemeService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.themeService.setThemeFromCookie();
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );
  }

  login(username: string, password: string): void {
    this.dataService.login(username, password);
  }
}
