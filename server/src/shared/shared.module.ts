import {Module} from '@nestjs/common';
import {SortService} from './sort.service';

@Module({
  imports: [],
  providers: [SortService],
  controllers: [],
  exports: [SortService],
})
export class SharedModule {
}
