import {Injectable, OnInit} from '@angular/core';
import {CustomHttpService} from '../../shared/services/custom-http/custom-http.service';
import {Observable} from 'rxjs';
import {Rule} from '../../shared/interfaces/rule.interface';
import {EnvironmentService} from '../../shared/services/environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class RuleService implements OnInit {
  public environment: any;

  constructor(private httpService: CustomHttpService,
              private environmentService: EnvironmentService) {
  }

  public ngOnInit(): void {
    this.environment = this.environmentService.get();
    console.log(this.environment);
  }

  public getAll(): Observable<Rule[]> {
    return this.httpService.get<Rule[]>('');
  }
}
