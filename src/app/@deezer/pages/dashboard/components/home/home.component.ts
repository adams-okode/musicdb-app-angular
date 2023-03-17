import { Component, OnInit } from '@angular/core';
import { IArtist, IResult } from '@deezer/interfaces/index';
import { GlobalStateService } from '@deezer/services/index';
import { shortenLargeNumber } from '@deezer/utils/general.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public artists: IArtist[] = [];

  constructor(private globalStateService: GlobalStateService) {
    this.globalStateService.results.subscribe((results) => {
      console.log(results);
      this.artists = results.map((result: IResult) => {
        return {
          ...result.artist,
          nb_fan: shortenLargeNumber(result.artist.nb_fan, 1),
        };
      });
    });
  }

  ngOnInit(): void {}
}
