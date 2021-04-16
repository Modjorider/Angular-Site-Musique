import {Album} from '../modele/album';

export class Song{
    uuid: string;
    name: string;
    duration: number;
    trackNumber: number;
    writers: string[];
    lyrics: string;
    youtubeLink: string;
    albumId: string;
    album: Album;
    note: number;
  }