import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RechercheService } from '../../recherche';
import { SongService } from '../song.service';
import { Song } from '../model/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[];
  notes = [5, 4, 3, 2, 1];

  constructor(private songService: SongService, private cookieService: CookieService, public rechercheService: RechercheService) {
    this.songs = [];
  }

  ngOnInit(): void {
    this.songService
      .getSongs()
      .subscribe(
        (result) => { this.songs = result; },
        (error) => { console.error('[song-list]', error); }
      );
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

  choixNote(value, song: Song) {
    this.cookieService.set('Note/' + song.name,value);
    song.note = value;
    console.log(this.cookieService.get('Note/' + song.name));
  }

  getNote(){
    this.songs.forEach(song => {
      this.cookieService.check('Note/' + song.name)
        ? song.note = +(this.cookieService.get('Note/' + song.name))
        : song.note = 0;
    });
  }
}