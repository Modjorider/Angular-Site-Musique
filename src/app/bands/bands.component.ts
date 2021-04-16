import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import {Album} from '../../modele/album';
import {Band} from '../../modele/band';
import { RechercheService } from '../recherche';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})



export class BandsComponent implements OnInit {
  bands: Band[];
  codes: Map<string,string>= new Map<string,string>();
  trier:string;

  constructor(private HttpClient: HttpClient,
    private cookieService: CookieService,
    public rechercheService:RechercheService) {

          
    this.codes.set('country.france','fr');
    this.codes.set('country.denmark', 'dk');
    this.codes.set('country.sweden', 'se');
    this.codes.set('country.usa', 'us');
    this.codes.set('country.faroe_islands','fo');
    this.codes.set('country.germany','de');

    }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/bands')
    .subscribe( response => {
      this.bands=response;
      this.trierGroupe();
      this.bands.forEach(element => console.log(element.originCountry));
    });

  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

  onClick(band: Band){
    band.all=!band.all;
  }

  trierGroupe(){
    this.cookieService.check("Trier")? 
      this.méthodeTrier(this.cookieService.get("Trier")) :  this.méthodeTrier("0");

  }

  méthodeTrier(méthode: string){
    méthode==="0"?
    this.bands.sort((a,b) => a.name.localeCompare(b.name)) : this.bands.sort((a,b) => a.originCountry.localeCompare(b.originCountry));
    console.log(this.bands);

  }

  rechercher(value){
    console.log("Recherche depuis bands: " + value);
  }


}
