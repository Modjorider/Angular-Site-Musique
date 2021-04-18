import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_AUTOPLAY, COOKIE_SORTBY } from 'src/util/const';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  autoplay: boolean;
  sort: string;

  constructor(private cookieService:CookieService) {
    this.autoplay = this.cookieService.get(COOKIE_AUTOPLAY) === 'true';

    if (!this.cookieService.check(COOKIE_SORTBY)) {
      this.cookieService.set(COOKIE_SORTBY, '0');
    }

    this.sort = this.cookieService.get(COOKIE_SORTBY);
   }

  ngOnInit(): void {

  }

  onChange() {
    this.autoplay = !this.autoplay;
    this.cookieService.set(COOKIE_AUTOPLAY, `${this.autoplay}`);
  }

  sortBands(newValue: string) {
    this.sort = newValue;
    this.cookieService.set(COOKIE_SORTBY, this.sort);
  }
}
