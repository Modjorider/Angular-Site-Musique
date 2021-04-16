import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {langues} from '../util/langues_const';
import { RechercheService } from './recherche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sitemusique';
  selectedOption: string;
  languages = langues;
  recherche: string;


  constructor(private translate: TranslateService,
    private cookieService: CookieService,
    private rechercheService:RechercheService
    ){

    translate.setDefaultLang('en');
    this.cookieService.check("Langue")? translate.use(this.cookieService.get("Langue")):translate.use("en");

  }

  onChange(newValue) {
    this.selectedOption = newValue;
    this.cookieService.set('Langue',this.selectedOption);
    this.translate.use(this.selectedOption);

  }

  onClick() {
    this.cookieService.set('Thème',this.cookieService.get('Thème')=='sombre'? 'clair':'sombre')
  }

  get staticTheme() {
    return this.cookieService.check('Thème')? this.cookieService.get('Thème'):this.cookieService.set('Thème', 'clair');
  }

  rechercher(value) {
    this.rechercheService.setFilter(value);
  }
}
