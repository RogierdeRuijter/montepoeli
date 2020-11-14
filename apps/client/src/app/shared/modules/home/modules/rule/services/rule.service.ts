import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../../../../../shared/modules/http/services/custom-http/custom-http.service';
import { Observable } from 'rxjs';
import { Rule } from '../../../../../../shared/interfaces/rule.interface';
import { EnvironmentService } from '../../../../../../shared/services/environment/environment.service';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  public environment: Environment;

  constructor(private httpService: CustomHttpService, private environmentService: EnvironmentService) {
    this.environment = this.environmentService.get();
  }

  public getAll(): Observable<Rule[]> {
    return this.httpService.get<Rule[]>(this.environment.backend.entryPoints.rule);
  }
}
