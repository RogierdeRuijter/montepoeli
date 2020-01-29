import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../shared/modules/auth/guards/auth-guard.service';
import {HomeComponent} from './components/home/home.component';
import {GameResolver} from './resolvers/game.resolver';
import {RuleResolver} from './resolvers/rule.resolver';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      games: GameResolver,
      rules: RuleResolver
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}