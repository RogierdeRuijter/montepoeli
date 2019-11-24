import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth-guard.service';
import {OverviewComponent} from './overview/overview.component';
import {GameComponent} from './modules/game/components/game/game.component';
import {RuleComponent} from './modules/rule/components/rule/rule.component';
import { GameResolver } from './resolvers/game-resolver.service';
import { RuleResolver } from './resolvers/rule-resolver.service';

const overviewRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    canActivate: [AuthGuard],
    resolve: {
      games: GameResolver,
      rules: RuleResolver
    },
    children: [
      {
        path: 'games',
        component: GameComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'rules',
        component: RuleComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(overviewRoutes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {
}
