import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SongService } from '../song.service';
import { Song } from '../model/song';
import { SearchService } from 'src/app/search/search.service';
import { COOKIE_NOTE, COOKIE_THEME } from 'src/util/const';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  private _songs: Song[];
  notes = [5, 4, 3, 2, 1];

  constructor(private songService: SongService, private cookieService: CookieService, private searchService: SearchService) {
    this._songs = [];
  }

  ngOnInit(): void {
    this.songService
      .getSongs()
      .subscribe(
        (result) => { this._songs = result; },
        (error) => { console.error('[song-list]', error); }
      );
  }

  get songs() {
    return this.searchService.getFilteredItems(this._songs);
  }

  getTheme() {
    return this.cookieService.get(COOKIE_THEME);
  }

  choixNote(value, song: Song) {
    this.cookieService.set(`${COOKIE_NOTE}:${song.uuid}`, value);
    song.note = value;
  }

  getNote() {
    this.songs.forEach(song => {
      this.cookieService.check(`${COOKIE_NOTE}:${song.uuid}`)
        ? song.note = +(this.cookieService.get(`${COOKIE_NOTE}:${song.uuid}`))
        : song.note = 0;
    });
  }
}
