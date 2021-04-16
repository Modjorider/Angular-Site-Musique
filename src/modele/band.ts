import {Album} from '../modele/album';

export class Band {
    uuid: string;
    name: string;
    originCountry: string;
    formationYear: number;
    smallLogo: string;
    largeLogo: string;
    banner: string;
    members: string[];
    albumsId: string[];
    website: string;
    albums: Album[];
    all:boolean=false;
  
    constructor(){
      this.albumstries();
    }
  
    albumstries(){
      this.albums=this.albums.sort((a,b) => a.releaseDate.getTime()-b.releaseDate.getTime());
    }
  }