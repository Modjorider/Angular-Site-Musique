import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AlbumService } from '../album.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-album-unique',
  templateUrl: './album-unique.component.html',
  styleUrls: ['./album-unique.component.css']
})
export class AlbumUniqueComponent implements OnInit {
  album: Album;

  constructor(private albumService: AlbumService, private cookieService: CookieService, private activatedRoute: ActivatedRoute) {
    this.album = null;
  }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe((params: ParamMap) => {
          const uuid: string = params.get('uuid');

          if (uuid !== null) {
            this.albumService
              .getAlbum(uuid)
              .subscribe(
                (result) => { this.album = result; },
                (error) => { console.error('[album-unique]', error); }
              );
          }
        }
      );
  }

  get staticTheme() {
    return this.cookieService.get('Thème');
  }
}
