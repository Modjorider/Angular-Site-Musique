import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from 'src/app/search/search.service';
import { AlbumService } from '../album.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  private _albums: Album[];

  constructor(private albumService: AlbumService, private cookieService: CookieService, private searchService: SearchService) {
    this._albums = [];
  }

  ngOnInit(): void {
    this.albumService
      .getAlbums()
      .subscribe(
        (result) => { this._albums = result; },
        (error) => { console.error('[album-list]', error); }
      );
  }

  get albums() {
    return this.searchService.getFilteredItems(this._albums);
  }

  getTheme() {
    return this.cookieService.get('theme');
  }
}
