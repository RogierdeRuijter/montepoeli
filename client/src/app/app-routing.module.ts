import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/modules/auth/guards/auth-guard.service';
import {MainContentComponent} from './components/main-content/main-content.component';
import {LandingComponent} from './components/landing/landing.component';

// TODO: figure out how to use the environment here for the environment routes
const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
