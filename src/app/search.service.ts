import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchFilter: string;

  constructor() {
    this.searchFilter = '';
  }

  public getFilter(): string {
    return this.searchFilter;
  }

  public setFilter(value: string): void {
    this.searchFilter = value;
  }
}
