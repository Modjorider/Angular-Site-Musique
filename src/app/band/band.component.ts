import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Band } from '../../modele/band';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  band: Band;
  name: string;
  codes: Map<string,string>= new Map<string,string>();


  constructor(private HttpClient: HttpClient,
    private cookieService: CookieService,
    private route: ActivatedRoute) {
      if(this.route.snapshot.url.length === 2){
        this.name = this.route.snapshot.url[1].path;
      }
    }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/bands/'+this.name)
    .subscribe( response => this.band=response);

    this.codes.set('country.france','fr');
    this.codes.set('country.denmark', 'dk');
    this.codes.set('country.sweden', 'se');
    this.codes.set('country.usa', 'us');
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

}
