import { ThemeService } from '../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  biography: string = '';
  theme: string = '';
  themeInverse: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );
    this.biography = `Hi, I'm Joel and I'm currently 20 years old. I'm a Swiss software engineer currently 
    working in Leeds after having studied Computer Science at the University of Kent in Canterbury.\n
    On a day to day basis I work with web technologies where I am working on the back-end in PHP.`;
  }
}
