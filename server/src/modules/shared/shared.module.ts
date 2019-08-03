import {Module} from '@nestjs/common';
import {SortService} from './sort.service';
import {UtilService} from './util.service';

@Module({
  imports: [],
  providers: [
    SortService,
    UtilService,
  ],
  controllers: [],
  exports: [
    SortService,
    UtilService,
  ],
})
export class SharedModule {
}
