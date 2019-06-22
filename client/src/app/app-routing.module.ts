import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './modules/shared/guards/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: './modules/game/game.module#GameModule',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
