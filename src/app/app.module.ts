import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@deezer/pages/auth/auth.module';
import { DashboardModule } from '@deezer/pages/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalStateService } from '@deezer/services/index';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    DashboardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [GlobalStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
