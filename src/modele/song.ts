import { Album } from 'src/app/album/model/album';

export class Song {
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
