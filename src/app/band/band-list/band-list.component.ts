import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BandService } from '../band.service';
import { RechercheService } from '../../recherche';
import { Band } from '../model/band';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bands: Band[];
  codes: Map<string, string>;
  trier: string;

  constructor(private bandService: BandService, private cookieService: CookieService, public rechercheService: RechercheService) {
    this.bands = [];
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
        (result) => { this.bands = result; },
        (error) => { console.error('[band-list]', error); }
      );
  }

  get staticTheme() {
    return this.cookieService.get('Thème');
  }

  onClick(band: Band) {
    band.all = !band.all;
  }

  trierGroupe(){
    this.cookieService.check("Trier")
      ? this.méthodeTrier(this.cookieService.get("Trier"))
      : this.méthodeTrier("0");
  }

  méthodeTrier(méthode: string) {
    méthode === "0"
      ? this.bands.sort((a,b) => a.name.localeCompare(b.name))
      : this.bands.sort((a,b) => a.originCountry.localeCompare(b.originCountry));
  }

  rechercher(value) {

  }
}
