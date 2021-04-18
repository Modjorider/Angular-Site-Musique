import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Lyrics } from '../model/lyrics';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  @Input()
  lyrics: Lyrics;

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) {
    this.lyrics = null;
  }

  ngOnInit(): void {

  }

  getLyricsLanguages(): string[] {
    return [].concat(this.lyrics.language);
  }

  getTheme() {
    return this.cookieService.get('theme');
  }
}
