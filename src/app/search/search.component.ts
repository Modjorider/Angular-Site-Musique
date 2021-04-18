import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilter: string;

  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {

  }

  search() {
    this.searchService.setFilter(this.searchFilter);
  }
}
