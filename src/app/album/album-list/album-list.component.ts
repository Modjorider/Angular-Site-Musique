import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AlbumService } from '../album.service';
import { SearchService } from '../../search.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];

  constructor(private albumService: AlbumService, private cookieService: CookieService, public searchService: SearchService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumService
      .getAlbums()
      .subscribe(
        (result) => { this.albums = result; },
        (error) => { console.error('[album-list]', error); }
      );
  }

  getTheme() {
    return this.cookieService.get('theme');
  }
}
