import { Album } from 'src/app/album/model/album';

export interface Band {
  uuid: string;
  name: string;
  originCountry: string;
  formationYear: number;
  smallLogo: string;
  largeLogo: string;
  banner: string;
  members: string[];
  website: string;
  albums: Album[];

  all: boolean;
}
