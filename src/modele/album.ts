import { Band } from 'src/app/band/model/band';
import {Song} from '../modele/song';

export class Album{
    uuid: string;
    name: string;
    cover: string;
    releaseDate: Date;
    recordingCountry: string;
    genre: string;
    type: string;
    songsId: string[];
    bandId: string;
    band: Band;
    songs: Song[];
    nbsong: number;

    constructor(){
      this.nbsongs();
    }

    nbsongs(){
      this.nbsong = this.songs.length;
    }
  }
