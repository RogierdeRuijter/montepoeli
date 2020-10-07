import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  public sortByDateDescending(objects: any[]): any[] {
    return objects.sort((n1, n2) => n2.date.getTime() - n1.date.getTime());
  }
}
