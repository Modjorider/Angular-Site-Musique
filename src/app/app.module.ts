import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { BandListComponent } from './band/band-list/band-list.component';
import { BandUniqueComponent } from './band/band-unique/band-unique.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './song/song.component';
import { ErreursComponent } from './erreurs/erreurs.component';
import { ProfilComponent } from './profil/profil.component';
import { RechercheService } from './recherche';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumComponent,
    BandListComponent,
    BandUniqueComponent,
    SongsComponent,
    SongComponent,
    ErreursComponent,
    ProfilComponent,
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
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    })
  ],
  providers: [CookieService, RechercheService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
