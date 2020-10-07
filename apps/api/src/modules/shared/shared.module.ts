import { Module } from '@nestjs/common';
import { SortService } from './services/sort/sort.service';
import { UtilService } from './services/util/util.service';

@Module({
  imports: [],
  providers: [SortService, UtilService],
  controllers: [],
  exports: [SortService, UtilService],
})
export class SharedModule {}
