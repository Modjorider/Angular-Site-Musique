import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from 'src/app/search/search.service';
import { BandService } from '../band.service';
import { Band } from '../model/band';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  private _bands: Band[];
  codes: Map<string, string>;
  sort: string;

  constructor(private bandService: BandService, private cookieService: CookieService, private searchService: SearchService) {
    this._bands = [];
    this.codes = new Map<string, string>();

    this.codes.set('country.france','fr');
    this.codes.set('country.denmark', 'dk');
    this.codes.set('country.sweden', 'se');
    this.codes.set('country.usa', 'us');
    this.codes.set('country.faroe_islands','fo');
    this.codes.set('country.germany','de');
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
    return this.cookieService.get('theme');
  }

  sortBands() {
    this.cookieService.check('sortBy')
      ? this.sortMethod(this.cookieService.get('sortBy'))
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
