import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from '@deezer/interfaces/artist';
import { DeezerApiService } from '@deezer/services/index';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  public artist: IArtist = {} as IArtist;

  constructor(
    private deezerApiService: DeezerApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.deezerApiService
      .getArtist(id ?? '')
      .subscribe((artist) => (this.artist = artist));
  }
}
