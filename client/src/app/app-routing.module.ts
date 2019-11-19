import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './modules/shared/guards/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {Environment} from '../environments/environment';
import {LandingComponent} from './components/landing/landing.component';

const environment = new Environment();

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/' + environment.frontend.BASIC_ROUTES.LANDING,
    pathMatch: 'full',
  },
  {
    path: environment.frontend.BASIC_ROUTES.LANDING,
    component: LandingComponent
  },
  {
    path: environment.frontend.BASIC_ROUTES.LOGIN,
    component: LoginComponent,
  },
  {
    path: environment.frontend.BASIC_ROUTES.HOME,
    loadChildren: './modules/home/home.module#HomeModule',
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/' + environment.frontend.BASIC_ROUTES.LANDING }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
