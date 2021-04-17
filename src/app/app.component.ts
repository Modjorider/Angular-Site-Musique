import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { langs } from '../util/langs_const';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sitemusique';
  selectedOption: string;
  languages = langs;
  searchFilter: string;

  constructor(private translate: TranslateService, private cookieService: CookieService, private searchService: SearchService) {
    translate.setDefaultLang('en');
  }

  onChange(newValue) {
    this.selectedOption = newValue;
    this.translate.use(this.selectedOption);
  }

  onClick() {
    this.cookieService.set('theme', this.cookieService.get('theme') == 'dark' ? 'bright' : 'dark')
  }

  getTheme() {
    return this.cookieService.check('theme')
      ? this.cookieService.get('theme')
      : this.cookieService.set('theme', 'bright');
  }

  search(value) {
    this.searchService.setFilter(value);
  }
}
