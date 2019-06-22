import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  public isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
}

