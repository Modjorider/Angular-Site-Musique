import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BandService } from '../band.service';
import { Band } from '../model/band';

@Component({
  selector: 'app-band-unique',
  templateUrl: './band-unique.component.html',
  styleUrls: ['./band-unique.component.css']
})
export class BandUniqueComponent implements OnInit {
  band: Band;
  codes: Map<string, string>;

  constructor(private bandService: BandService, private cookieService: CookieService, private activatedRoute: ActivatedRoute) {
    this.band = null;
    this.codes = new Map<string, string>();

    this.codes.set('country.france','fr');
    this.codes.set('country.denmark', 'dk');
    this.codes.set('country.sweden', 'se');
    this.codes.set('country.usa', 'us');

  }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
          const uuid: string = params.get('uuid');

          if (uuid !== null) {
            this.bandService
              .getBand(uuid)
              .subscribe(
                (result) => { this.band = result; },
                (error) => { console.error('[band-unique]', error); }
              );
          }
        }
      );
  }

  get staticTheme() {
    return this.cookieService.get('Thème');
  }
}
