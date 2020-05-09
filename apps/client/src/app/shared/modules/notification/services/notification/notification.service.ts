import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NotificationModule} from '../../notification.module';

@Injectable({
  providedIn: NotificationModule,
})
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public warning(message: string, title?: string): void {
    this.toastrService.warning(message, title);
  }

  public info(message: string, title?: string): void {
    this.toastrService.info(message, title);
  }
}
