import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { TranslateMockPipe } from './translate-mock.pipe';
import { TranslateServiceStub } from './translate-service-stub';

@NgModule({
  declarations: [TranslateMockPipe],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslateMockPipe },
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
    }),
  ],
  exports: [TranslateMockPipe, TranslateModule],
})
export class TranslateTestingModule {}
