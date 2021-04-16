import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import {Song} from '../../modele/song';
import { RechercheService } from '../recherche';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: Song[];
  notes = [5,4,3,2,1];
 
  constructor(private HttpClient: HttpClient, 
    private route: ActivatedRoute,
    private translate: TranslateService, 
    private cookieService: CookieService,
    private rechercheService:RechercheService) { 
    translate.use(cookieService.get('Langue'));
  }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/songs')
    .subscribe(response => {
        this.songs=response;
        this.getNote();
    });
    
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

  choixNote(value, song: Song){
    this.cookieService.set("Note/"+song.name,value);
    song.note=value;
    console.log(this.cookieService.get("Note/"+song.name));
  }

  getNote(){
    this.songs.forEach(song => {
      this.cookieService.check("Note/"+song.name)? song.note=parseInt(this.cookieService.get("Note/"+song.name)):song.note=0;
    });
  }
}
