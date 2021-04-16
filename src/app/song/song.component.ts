import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../modele/song';
import { CookieService } from 'ngx-cookie-service';
import {DomSanitizer} from '@angular/platform-browser';
import {lyrics} from '../../modele/lyrics'
import { langues } from 'src/util/langues_const';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  name: string;
  song: Song;
  Liendébut: string[]=new Array();
  Lien: string;
  autoplay: boolean;
  lyrics: lyrics[];
  languages = langues;
  alone: boolean = true;
  selectedOption: string;
  lang: boolean = true;



  constructor(private HttpClient: HttpClient, 
    private route: ActivatedRoute,
    private cookieService:CookieService,
    private sanitizer:DomSanitizer) {

    if(this.route.snapshot.url.length === 2){
      this.name = this.route.snapshot.url[1].path;
    }

    this.cookieService.check("Autoplay")? 
      (this.cookieService.get("Autoplay")==="false"? this.autoplay=false:this.autoplay=true): 
        this.autoplay=false;

  }

  ngOnInit(): void {
    this.HttpClient.get<any>('http://localhost:3000/api/v1/songs/'+this.name)
    .subscribe(response => {
        this.song=response;
        this.getLien();
        this.getlyrics();
    });

  }

  get staticTheme(){
    return this.cookieService.get('Thème');
  }

  getLien(){
    this.Liendébut=this.song.youtubeLink.split("watch?v=");

    this.autoplay? this.Lien= this.Liendébut[0]+"embed/"+this.Liendébut[1]+"?autoplay=1": this.Lien= this.Liendébut[0]+"embed/"+this.Liendébut[1] ;

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.Lien);
    // URL début : https://www.youtube.com/watch?v=H7FIw--9Hs4
    // URL fin : https://www.youtube.com/embed/H7FIw--9Hs4
  }


  getlyrics(){
    this.HttpClient.get<any>('http://localhost:3000/api/v1/lyrics/'+this.song.uuid)
    .subscribe(response => {
      this.lyrics=response;
      this.lyrics.forEach(element =>{ typeof(element.language) === 'string'? element.lang=false: element.lang=true; console.log(element.lang)});
    })



  }

  onChange(value){
    this.alone=false;
    this.selectedOption=value;
    console.log(this.selectedOption);
  }

}
