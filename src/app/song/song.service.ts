import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private httpClient: HttpClient) {

  }

  getSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>('http://localhost:3000/api/v1/songs');
  }

  getSong(id: string): Observable<Song> {
    return this.httpClient.get<Song>(`http://localhost:3000/api/v1/songs/${id}`);
  }
}
