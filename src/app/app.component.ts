import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_THEME } from 'src/util/const';
import { langs } from '../util/langs_const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sitemusique';
  selectedOption: string;
  languages = langs;

  constructor(private translate: TranslateService, private cookieService: CookieService) {
    translate.setDefaultLang('en');
  }

  onChange(newValue) {
    this.selectedOption = newValue;
    this.translate.use(this.selectedOption);
  }

  onClick() {
    this.cookieService.set(COOKIE_THEME, this.cookieService.get(COOKIE_THEME) == 'bright' ? 'dark' : 'bright')
  }

  getTheme() {
    if (!this.cookieService.check(COOKIE_THEME)) {
      this.cookieService.set(COOKIE_THEME, 'bright');
    }

    return this.cookieService.get(COOKIE_THEME);
  }
}
