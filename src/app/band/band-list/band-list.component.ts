import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from 'src/app/search/search.service';
import { COOKIE_SORTBY, COOKIE_THEME } from 'src/util/const';
import { countries } from 'src/util/countries_const';
import { BandService } from '../band.service';
import { Band } from '../model/band';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  private _bands: Band[];
  codes = countries;
  sort: string;

  constructor(private bandService: BandService, private cookieService: CookieService, private searchService: SearchService) {
    this._bands = [];
  }

  ngOnInit(): void {
    this.bandService
      .getBands()
      .subscribe(
        (result) => { this._bands = result; },
        (error) => { console.error('[band-list]', error); }
      );
  }

  get bands() {
    return this.searchService.getFilteredItems(this._bands);
  }

  getTheme() {
    return this.cookieService.get(COOKIE_THEME);
  }

  sortBands() {
    this.cookieService.check(COOKIE_SORTBY)
      ? this.sortMethod(this.cookieService.get(COOKIE_SORTBY))
      : this.sortMethod('0');
  }

  sortMethod(methode: string) {
    methode === '0'
      ? this.bands.sort((a, b) => a.name.localeCompare(b.name))
      : this.bands.sort((a, b) => a.originCountry.localeCompare(b.originCountry));
  }

  onClick(band: Band) {
    band.all = !band.all;
  }
}
