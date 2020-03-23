import {DynamicEnvironmentInterface} from './dynamic-environment.interface';

declare var window: any;

export class DynamicEnvironment {
  public get environment(): DynamicEnvironmentInterface {
    return window.config;
  }
}
