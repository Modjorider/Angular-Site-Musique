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

  // TODO : Make it accent insentitive
  public getFilteredItems(items: any[]) {
    return items.filter(item => (item.name as string).toLowerCase().trim().includes(this.getFilter().toLowerCase().trim()));
  }
}
