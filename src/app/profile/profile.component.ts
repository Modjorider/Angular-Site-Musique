import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  autoplay:boolean;
  sort: string;

  constructor(private cookieService:CookieService) {
      this.cookieService.check('autoplay')
        ? (this.cookieService.get('autoplay') === 'false'
          ? this.autoplay = false
          : this.autoplay = true)
        : this.autoplay = false;

      this.cookieService.check('sortBy')
        ? this.sort = this.cookieService.get('sortBy')
        : this.sort = '0', this.cookieService.set('sortBy', '0');
   }

  ngOnInit(): void {

  }

  onChange() {
    this.autoplay = !this.autoplay;
    this.autoplay === false
      ? this.cookieService.set('autoplay', 'false')
      : this.cookieService.set('autoplay', 'true');
  }

  sortBands(newValue: string) {
    this.sort = newValue;
    this.cookieService.set('sortBy', this.sort);
  }
}
