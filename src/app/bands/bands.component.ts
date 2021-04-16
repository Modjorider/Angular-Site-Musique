import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Band} from '../../modele/band';
import { codes } from '../../util/codes';
import { RechercheService } from '../recherche';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})



export class BandsComponent implements OnInit {
  bands: Band[];
  trier:string;
  codes = codes;

  constructor(private HttpClient: HttpClient,
    private cookieService: CookieService,
    public rechercheService:RechercheService,
    ) { }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/bands')
    .subscribe( response => {
      this.bands=response;
      this.trierGroupe();
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
