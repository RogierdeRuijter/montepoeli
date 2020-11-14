import { DynamicEnvironmentInterface } from './dynamic-environment.interface';

declare let window: any;

export class DynamicEnvironment {
  public get environment(): DynamicEnvironmentInterface {
    return window.config;
  }
}
