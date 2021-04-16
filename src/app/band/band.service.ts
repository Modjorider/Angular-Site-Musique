import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Band } from './model/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  constructor(private httpClient: HttpClient) {

  }

  getBands(): Observable<Band[]> {
    return this.httpClient.get<Band[]>('http://localhost:3000/api/v1/bands');
  }

  getBand(id: string): Observable<Band> {
    return this.httpClient.get<Band>(`http://localhost:3000/api/v1/bands/${id}`);
  }
}
