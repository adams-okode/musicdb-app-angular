import { IAlbum } from "./album";
import { IArtist } from "./artist";
import { ITrack } from "./track";

export interface IResult {
    album: IAlbum;
    artist: IArtist;
    tracks: ITrack;
    duration: number;
    id: number;
    title: string;
}
