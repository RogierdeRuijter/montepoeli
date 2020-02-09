import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../shared/modules/auth/guards/auth-guard.service';
import { MainContentComponent } from './main-content.component';

const mainContentRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../shared/modules/home/home.module').then(m => m.HomeModule),
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainContentRoutes)],
  exports: [RouterModule],
})
export class MainContentRoutingModule {
}
