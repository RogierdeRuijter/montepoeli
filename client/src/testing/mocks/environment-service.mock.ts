import {Injectable} from '@angular/core';
import {Environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentServiceMock {
  public environment: any = new Environment();

  public get(): void {
    return this.environment;
  }
}
