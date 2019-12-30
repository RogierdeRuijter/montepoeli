import {Injectable} from '@angular/core';

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
}
