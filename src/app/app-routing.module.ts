import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { BandsComponent } from './bands/bands.component';
import { SongsComponent } from './songs/songs.component';
import {ErreursComponent} from './erreurs/erreurs.component';
import { AlbumComponent } from './album/album.component';
import { SongComponent } from './song/song.component';
import { BandComponent } from './band/band.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', component: BandsComponent},
  { path: 'bands', component: BandsComponent},
  { path: 'band/:uuid', component: BandComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'album/:uuid', component: AlbumComponent},
  { path: 'songs', component: SongsComponent},
  { path: 'song/:uuid', component: SongComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'erreurUrl', component: ErreursComponent},
  { path: '**', component: ErreursComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
