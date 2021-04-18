import { Album } from 'src/app/album/model/album';
import { Lyrics } from './lyrics';

export interface Song {
  uuid: string;
  name: string;
  duration: number;
  trackNumber: number;
  writers: string[];
  lyrics: Lyrics[];
  youtubeLink: string;
  album: Album;
  note: number;
}
