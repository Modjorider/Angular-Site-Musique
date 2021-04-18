import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_THEME } from 'src/util/const';
import { countries } from 'src/util/countries_const';
import { BandService } from '../band.service';
import { Band } from '../model/band';

@Component({
  selector: 'app-band-unique',
  templateUrl: './band-unique.component.html',
  styleUrls: ['./band-unique.component.css']
})
export class BandUniqueComponent implements OnInit {
  band: Band;
  codes = countries;

  constructor(private bandService: BandService, private cookieService: CookieService, private activatedRoute: ActivatedRoute) {
    this.band = null;
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

  getTheme() {
    return this.cookieService.get(COOKIE_THEME);
  }
}
