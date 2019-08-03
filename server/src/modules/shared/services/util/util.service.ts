import {Injectable} from '@nestjs/common';

@Injectable()
export class UtilService {
  public isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
}
