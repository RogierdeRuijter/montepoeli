import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth-guard.service';
import {GameComponent} from './components/game/game.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: GameComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class GameRoutingModule {
}
