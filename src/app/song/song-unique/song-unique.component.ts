import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SongService } from '../song.service';
import { Song } from '../model/song';
import { Lyrics } from '../model/lyrics';
import { langs } from 'src/util/langs_const';

@Component({
  selector: 'app-song-unique',
  templateUrl: './song-unique.component.html',
  styleUrls: ['./song-unique.component.css']
})
export class SongUniqueComponent implements OnInit {
  song: Song;
  startLink: string[];
  link: string;
  autoplay: boolean;
  alone: boolean;
  languages = langs;
  selectedOption: string;

  constructor(private songService: SongService, private cookieService: CookieService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.song = null;
    this.startLink = [];
    this.alone = true;

    this.cookieService.check('autoplay')
      ? (this.cookieService.get('autoplay') === 'false'
        ? this.autoplay = false
        : this.autoplay = true)
      : this.autoplay = false;
  }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
          const uuid: string = params.get('uuid');

          if (uuid !== null) {
            this.songService
              .getSong(uuid)
              .subscribe(
                (result) => {
                  this.song = result;
                  this.getLink();
                },
                (error) => { console.error('[song-unique]', error); }
              );
          }
        }
      );
  }

  onChange(value) {
    this.alone = false;
    this.selectedOption = value;
  }

  getOriginalLyrics(): Lyrics {
    return this.song.lyrics.find(l => l.original === true);
  }

  getTranslatedLyrics(): Lyrics[] {
    return this.song.lyrics.filter(l => l.original === false);
  }

  getSelectedTranslatedLyrics(): Lyrics {
    return this.song.lyrics.find(l => (l.language as string) == this.selectedOption && l.original === false);
  }

  // Gets all languages from all lyrics except original one in a single array
  // TODO : Need to be optimised
  getTranslatedLyricsCodes(): string[] {
    return this.getTranslatedLyrics().reduce((a: any, {language}) => ([a].concat(language) as any).flat(), []);
  }

  getTheme() {
    return this.cookieService.get('theme');
  }

  getLink() {
    this.startLink = this.song.youtubeLink.split("watch?v=");
    this.autoplay ? this.link = this.startLink[0] + "embed/" + this.startLink[1] + "?autoplay=1" : this.link = this.startLink[0] + "embed/" + this.startLink[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
    // URL début : https://www.youtube.com/watch?v=H7FIw--9Hs4
    // URL fin : https://www.youtube.com/embed/H7FIw--9Hs4
  }
}
