import { Injectable } from '@nestjs/common';

@Injectable()
export class SortService {
  public sortByDateDescending(objects: any[]): any[] {
    return objects.sort((n1, n2) => n2.date.getTime() - n1.date.getTime());
  }

  public sortByDateAscending(objects: any[]): any[] {
    return objects.sort((n1, n2) => n1.date.getTime() - n2.date.getTime());
  }
}
