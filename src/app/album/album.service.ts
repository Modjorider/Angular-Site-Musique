import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private httpClient: HttpClient) {

  }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('http://localhost:3000/api/v1/albums');
  }

  getAlbum(id: string): Observable<Album> {
    return this.httpClient.get<Album>(`http://localhost:3000/api/v1/albums/${id}`);
  }
}
