import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from '@deezer/pages/dashboard/layouts/dashboard-layout/dashboard-layout.component';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@deezer/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('@deezer/pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
