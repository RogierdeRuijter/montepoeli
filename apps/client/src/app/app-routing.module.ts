import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/modules/auth/guards/auth-guard.service';
import { LandingComponent } from './main/components/landing/landing.component';

// TODO: figure out how to use the environment here for the environment routes
const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./main/modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./main/modules/main-content/main-content.module').then((m) => m.MainContentModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
