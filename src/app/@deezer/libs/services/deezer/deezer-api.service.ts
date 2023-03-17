import { Injectable } from '@angular/core';
import { IAlbum, IArtist, IResult, ITrack } from '@deezer/interfaces/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeezerApiService {

  constructor(private http: HttpClient) {}

  searchMusic(str: string, type = 'artist'): Observable<IResult[]> {
    const searchUrl = `/api/search?q=${str}&offset=0&limit=50&type=${type}`;
    return this.http.get(searchUrl).pipe(map((res: any) => <IResult[]>res.data));
  }

  getArtist(id: string): Observable<IArtist> {
    const artistUrl = `/api/artist/${id}`;
    return this.http.get(artistUrl).pipe(map((res: any) => <IArtist>res));
  }

  getAlbums(artistId: string): Observable<IAlbum[]> {
    const albumsUrl = `/api/artist/${artistId}/albums`;
    return this.http.get(albumsUrl).pipe(map((res: any) => <IAlbum[]>res.data));
  }

  getAlbum(albumId: string): Observable<IAlbum> {
    const albumUrl = `/api/album/${albumId}`;
    return this.http.get(albumUrl).pipe(map((res: any) => <IAlbum>res));
  }

  getTracks(albumId: string): Observable<ITrack[]> {
    const tracksUrl = `/api/album/${albumId}/tracks`;
    return this.http.get(tracksUrl).pipe(map((res: any) => <ITrack[]>res.data));
  }
}
