import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  autoplay:boolean;
  trie:string;

  constructor(private cookieService:CookieService) {
      this.cookieService.check("Autoplay")
        ? (this.cookieService.get("Autoplay") === "false"
          ? this.autoplay = false
          : this.autoplay = true)
        : this.autoplay = false;

      this.cookieService.check("Trier")?
      this.trie = this.cookieService.get("Trier") : this.trie="0", this.cookieService.set("Trier","0");
   }

  ngOnInit(): void {}

  onChange(){
    this.autoplay = !this.autoplay;
    this.autoplay === false
      ? this.cookieService.set("Autoplay", "false")
      : this.cookieService.set("Autoplay", "true");
  }

  trierGroupe(newvalue){
    this.trie = newvalue;
    this.cookieService.set("Trier", this.trie);
  }

}
