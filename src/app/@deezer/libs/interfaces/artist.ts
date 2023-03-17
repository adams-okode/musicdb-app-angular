export interface IArtist {
  id: number | string;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  tracklist: string;
  type: string;
  nb_album: number;
  nb_fan: number| string;
  radio: boolean;
}
