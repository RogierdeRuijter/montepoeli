import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './modules/shared/guards/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {Environment} from '../environments/environment';
import {LandingComponent} from './components/landing/landing.component';

// TODO: figure out how to use the environment here for the environment routes
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/landing',

    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/landing' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
