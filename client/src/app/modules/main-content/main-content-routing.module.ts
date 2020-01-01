import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/modules/auth/guards/auth-guard.service';
import { MainContentComponent } from './components/main-content/main-content.component';

const mainContentRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/larger-screen-content/larger-screen-content.module').then(m => m.LargerScreenContentModule),
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '/mobile',
    loadChildren: () => import('./modules/mobile-content/mobile-content.module').then(m => m.MobileContentModule),
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
