import { Album } from 'src/app/album/model/album';

export interface Song {
  uuid: string;
  name: string;
  duration: number;
  trackNumber: number;
  writers: string[];
  lyrics: string;
  youtubeLink: string;
  album: Album;
  note: number;
}
