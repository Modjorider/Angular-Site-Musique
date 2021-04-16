import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BandsComponent } from './bands/bands.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { ErreursComponent } from './erreurs/erreurs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import {MatButtonModule} from '@angular/material/button';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlbumComponent } from './album/album.component';
import { SongComponent } from './song/song.component';
import { BandComponent } from './band/band.component';
import { ProfilComponent } from './profil/profil.component';
import { RechercheService } from './recherche';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    AlbumsComponent,
    SongsComponent,
    ErreursComponent,
    AlbumComponent,
    SongComponent,
    BandComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage:'fr'
    })
  ],
  providers: [CookieService, RechercheService],
  bootstrap: [AppComponent]
})


export class AppModule { }
