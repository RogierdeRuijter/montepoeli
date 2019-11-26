import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {

  private environment = new Environment();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.HOME], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.LOGIN], {relativeTo: this.activatedRoute});
    }
  }
}
