import { ThemeService } from '../../services/theme.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  theme: string = '';
  themeInverse: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // Make the navbar work on mobile
  @ViewChild('navBurger')
  navBurger!: ElementRef;
  @ViewChild('navMenu')
  navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
