import { Injectable } from '@angular/core';
import {GridSizes} from '../../static-files/enums';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public getBootstrapClassFor(gridSize: GridSizes): string {
    switch (gridSize) {
      case GridSizes.EXTRA_SMALL:
        return 'col';
      case GridSizes.SMALL:
        return 'col-sm';
      case GridSizes.MEDIUM:
        return 'col-md';
      case GridSizes.LARGE:
        return 'col-lg';
      case GridSizes.ALL:
        return 'col';
    }
  }
}
