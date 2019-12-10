import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../services/auth/auth.service';
import {NotificationService} from '../../notification/services/notification/notification.service';
import {Environment} from '../../../../../environments/environment';

// TODO: move to shared services
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private environment = new Environment();

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

    this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
    return false;
  }

}
