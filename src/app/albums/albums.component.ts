import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Album} from '../../modele/album';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { RechercheService } from '../recherche';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  translate: TranslateService;
  albumSimple: Album[];

  constructor(private HttpClient: HttpClient,
    private cookieService: CookieService,
    public rechercheService:RechercheService) { 
  }


  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/albums')
    .subscribe( response =>{this.albums=response;
    });
   
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }


}
