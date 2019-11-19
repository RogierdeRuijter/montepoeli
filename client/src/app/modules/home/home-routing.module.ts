import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {GameComponent} from '../game/components/game/game.component';
import {RuleComponent} from '../rule/components/rule/rule.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'games',
    component: GameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'rules',
    component: RuleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
