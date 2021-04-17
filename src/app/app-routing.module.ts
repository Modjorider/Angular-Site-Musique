import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumUniqueComponent } from './album/album-unique/album-unique.component';
import { BandListComponent } from './band/band-list/band-list.component';
import { BandUniqueComponent } from './band/band-unique/band-unique.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './song/song.component';
import { ErreursComponent } from './erreurs/erreurs.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', component: BandListComponent, pathMatch: 'full' },
  { path: 'band/:uuid', component: BandUniqueComponent },
  { path: 'bands', component: BandListComponent },
  { path: 'album/:uuid', component: AlbumUniqueComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'song/:uuid', component: SongComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'erreurUrl', component: ErreursComponent },
  { path: '**', component: ErreursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
