import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../shared/services/custom-http/custom-http.service';
import {Observable} from 'rxjs';
import {Rule} from '../../shared/interfaces/rule.interface';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(private httpService: CustomHttpService) {}

  public getAll(): Observable<Rule[]> {
    return this.httpService.get<Rule[]>(environment.backend.ENTRY_POINTS.RULE);
  }
}
