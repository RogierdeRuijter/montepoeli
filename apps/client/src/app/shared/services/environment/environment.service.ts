import { Injectable } from '@angular/core';
import { Environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  public get(): Environment {
    return new Environment();
  }
}
