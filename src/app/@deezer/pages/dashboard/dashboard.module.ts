import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DeezerApiService, GlobalStateService } from '@deezer/services/index';


@NgModule({
  declarations: [
    HomeComponent,
    ArtistComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ], 
  providers:[
    DeezerApiService
  ]
})
export class DashboardModule { }
