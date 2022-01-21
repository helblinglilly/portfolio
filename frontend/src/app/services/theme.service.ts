import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>('is-light');
  private themeInverse = new BehaviorSubject<string>('is-dark');
  private renderer: Renderer2;
  currentTheme = this.themeSource.asObservable();
  inverseTheme = this.themeInverse.asObservable();

  constructor(
    private rendererFactory: RendererFactory2,
    private cookieService: CookieService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    if (this.themeSource.value == 'is-light') {
      this.setDark();
    } else {
      this.setLight();
    }
  }

  setLight(): void {
    this.themeSource.next('is-light');
    this.themeInverse.next('is-dark');
    this.renderer.removeClass(document.body.parentNode, 'is-dark');
    this.renderer.addClass(document.body.parentNode, 'is-light');
    this.cookieService.set('theme', 'is-light', 7);
  }
  setDark(): void {
    this.themeSource.next('is-dark');
    this.themeInverse.next('is-light');
    this.renderer.removeClass(document.body.parentNode, 'is-light');
    this.renderer.addClass(document.body.parentNode, 'is-dark');
    this.cookieService.set('theme', 'is-dark', 7);
  }

  setThemeFromCookie(): void {
    let cookieData = this.cookieService.get('theme');
    if (cookieData) {
      if (cookieData === 'is-dark') this.setDark();
      else if (cookieData === 'is-light') this.setLight();
    } else {
      this.setLight();
    }
  }
}
