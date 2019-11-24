import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {Environment} from '../../../environments/environment';

@Component({
  template: ``
})
export class LandingComponent implements OnInit {

  private environment = new Environment();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  public ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.OVERVIEW], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['../' + this.environment.frontend.BASIC_ROUTES.LOGIN], {relativeTo: this.activatedRoute});
    }
  }
}
