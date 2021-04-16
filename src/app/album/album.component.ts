import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Album } from '../../modele/album';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  name: string;
  album: Album;


  constructor(private HttpClient: HttpClient,
     private route: ActivatedRoute,
     private cookieService:CookieService) { 
    if(this.route.snapshot.url.length === 2){
      this.name = this.route.snapshot.url[1].path;
    }
  }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/albums/'+this.name)
    .subscribe( response =>{this.album=response;});
  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }


}
