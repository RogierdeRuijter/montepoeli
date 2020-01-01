import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../../shared/modules/auth/guards/auth-guard.service';
import { LargeScreenContentComponent } from './components/large-screen-content/large-screen-content.component';

const largerScreenContentRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../home/home.module').then(m => m.HomeModule),
    component: LargeScreenContentComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(largerScreenContentRoutes)],
  exports: [RouterModule],
})
export class LargerScreenContentRoutingModule {
}
