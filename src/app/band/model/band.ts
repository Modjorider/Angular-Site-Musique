import {Album} from '../../../modele/album';

export interface Band {
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
  all: boolean;
}
