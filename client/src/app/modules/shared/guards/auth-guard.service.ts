import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../../services/auth/auth.service';
import {NotificationService} from '../services/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService,
              private translateService: TranslateService) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    forkJoin([
      this.translateService.get('warnings.not_authorized.title'),
      this.translateService.get('warnings.not_authorized.body'),
    ]).subscribe(([message, title]: [string, string]) => {
      this.notificationService.warning(message, title);
    });


    this.router.navigate([environment.FRONTEND.BASIC_ROUTES.LOGIN_ROUTE]).then();
    return false;
  }

}
