import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SongService } from '../song.service';
import { Song } from '../model/song';
import { lyrics } from 'src/modele/lyrics';
import { langues } from 'src/util/langues_const';

@Component({
  selector: 'app-song-unique',
  templateUrl: './song-unique.component.html',
  styleUrls: ['./song-unique.component.css']
})
export class SongUniqueComponent implements OnInit {
  song: Song;
  Liendébut: string[];
  Lien: string;
  autoplay: boolean;
  lyrics: lyrics[];
  languages = langues;
  alone: boolean;
  lang: boolean;
  selectedOption: string;

  constructor(private songService: SongService, private cookieService: CookieService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.song = null;
    this.Liendébut = [];
    this.alone = true;
    this.lang = true;

    this.cookieService.check('Autoplay')
      ? (this.cookieService.get('Autoplay') === 'false'
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
                  this.getLien();
                  this.getlyrics();
                },
                (error) => { console.error('[song-unique]', error); }
              );
          }
        }
      );
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

  getLien() {
    this.Liendébut = this.song.youtubeLink.split("watch?v=");
    this.autoplay ? this.Lien = this.Liendébut[0] + "embed/" + this.Liendébut[1] + "?autoplay=1" : this.Lien = this.Liendébut[0] + "embed/" + this.Liendébut[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.Lien);
    // URL début : https://www.youtube.com/watch?v=H7FIw--9Hs4
    // URL fin : https://www.youtube.com/embed/H7FIw--9Hs4
  }


  getlyrics() {
    // TODO Implements LyricsService
    /*
    this.httpClient.get<any>('http://localhost:3000/api/v1/lyrics/'+this.song.uuid)
    .subscribe(response => {
      this.lyrics=response;
      this.lyrics.forEach(element =>{ typeof(element.language) === 'string'? element.lang=false: element.lang=true; console.log(element.lang)});
    })
    */
  }

  onChange(value) {
    this.alone = false;
    this.selectedOption=value;
    console.log(this.selectedOption);
  }
}
