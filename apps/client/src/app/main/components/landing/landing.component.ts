import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../shared/modules/auth/services/auth/auth.service';
import { Environment } from '../../../../environments/environment';

@Component({
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  private environment = new Environment();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  public ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['../' + this.environment.frontend.basicRoutes.home], { relativeTo: this.activatedRoute });
    } else {
      this.router.navigate(['../' + this.environment.frontend.basicRoutes.login], { relativeTo: this.activatedRoute });
    }
  }
}
