import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  public validateRequest(request): Observable<boolean> {
    return of(false);
  }
}
