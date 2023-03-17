import { Component, OnInit } from '@angular/core';
import { DeezerApiService, GlobalStateService } from '@deezer/services/index';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  constructor(
    private deezerApiService: DeezerApiService,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit(): void {}

  onSearch(event: any) {
    this.deezerApiService
      .searchMusic(event.target.value)
      .subscribe((results) => this.globalStateService.results.next(results));
  }
}
