import {Injectable} from '@angular/core';
import {Environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  public get(): any {
    return new Environment();
  }
}
