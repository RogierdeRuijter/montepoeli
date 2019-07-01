import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public warning(message: string, title?: string): void {
    this.toastrService.warning(message, title);
  }

  public longWarning(message: string, title?: string): void {
    this.toastrService.warning(message, title, {
      timeOut: 3000,
    });
  }
}
