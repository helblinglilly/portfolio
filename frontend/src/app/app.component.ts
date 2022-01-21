import { ThemeService } from './services/theme.service';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string = 'Joel Helbling';
  theme: string = '';
  themeInverse: string = '';

  constructor(private themeService: ThemeService, private renderer: Renderer2) {
    this.renderer.addClass(document.body.parentNode, 'is-light');
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => (this.theme = theme));
    this.themeService.inverseTheme.subscribe(
      (themeInverse) => (this.themeInverse = themeInverse)
    );
  }
}
