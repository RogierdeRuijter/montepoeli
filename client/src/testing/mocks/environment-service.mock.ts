import {Injectable} from '@angular/core';
import {Environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentServiceMock {
  public environment: any;

  public g(): void {
    if (!this.environment) {
      // this.setEnvironment();
      this.environment = {};
    }

    return this.environment;
  }

  private setEnvironment(): void {
    this.environment = new Environment();
    this.environment['environment'] = {};
  }
}
