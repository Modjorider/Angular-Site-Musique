import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumUniqueComponent } from './album/album-unique/album-unique.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { BandUniqueComponent } from './band/band-unique/band-unique.component';
import { BandListComponent } from './band/band-list/band-list.component';
import { SongUniqueComponent } from './song/song-unique/song-unique.component';
import { SongListComponent } from './song/song-list/song-list.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: BandListComponent, pathMatch: 'full' },
  { path: 'band/:uuid', component: BandUniqueComponent },
  { path: 'bands', component: BandListComponent },
  { path: 'album/:uuid', component: AlbumUniqueComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'song/:uuid', component: SongUniqueComponent },
  { path: 'songs', component: SongListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
