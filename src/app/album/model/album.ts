import { Band } from 'src/app/band/model/band';
import { Song } from 'src/app/song/model/song';

export interface Album {
  uuid: string;
  name: string;
  cover: string;
  releaseDate: Date;
  recordingCountry: string;
  genre: string;
  type: string;
  band: Band;
  songs: Song[];
}
