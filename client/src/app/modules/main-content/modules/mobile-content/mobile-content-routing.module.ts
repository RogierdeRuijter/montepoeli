import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../../shared/modules/auth/guards/auth-guard.service';
import { MobileContentComponent } from './components/mobile-content/mobile-content.component';

const mobileContentRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../../modules/home/home.module').then(m => m.HomeModule),
    component: MobileContentComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mobileContentRoutes)],
  exports: [RouterModule],
})
export class MobileContentRoutingModule {
}
