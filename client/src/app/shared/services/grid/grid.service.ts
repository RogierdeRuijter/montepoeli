import { Injectable } from '@angular/core';
import {GridSizes} from '../../shared/static-files/enums';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private breakPoints = {
       xs: '(max-width: 575.99px)',
        sm: '(min-width: 576px) and (max-width: 767px)',
        md: '(min-width: 768px) and (max-width: 991px)',
        lg: '(min-width: 992px) and (max-width: 1439px)',
        xl: '(min-width: 1440px)'
      };
    
      private breakPointPxValues = [
        this.breakPoints.xs,
        this.breakPoints.sm,
        this.breakPoints.md,
        this.breakPoints.lg,
        this.breakPoints.xl
      ];

      constructor(private breakpointObserver: BreakpointObserver) {}

  // TODO: write a unit test for this
  public gridChangeObservable(): Observable<GridSizes> {
        return this.breakpointObserver
          .observe(this.breakPointPxValues)
          .pipe(
            map((breakPointState: BreakpointState) => {
              let activeGrid: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    
              Object.keys(this.breakPoints).forEach((grid: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
                const breakPointPxValue = this.breakPoints[grid];
                const isBreakPoint: boolean = breakPointState.breakpoints[breakPointPxValue];
    
                if (isBreakPoint === true) {
                  activeGrid = grid;
                  return;
                }
              });
    
              return activeGrid;
            }),
            map((activeGrid: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
              switch (activeGrid) {
                case 'xs':
                  return GridSizes.EXTRA_SMALL;
                case 'sm':
                  return GridSizes.SMALL;
                case 'md':
                  return GridSizes.MEDIUM;
                case 'lg':
                  return GridSizes.LARGE;
                case 'xl':
                  return GridSizes.EXTRA_LARGE;
                default: 
                  return GridSizes.ALL;
              }
            })
          );
      }   
}
