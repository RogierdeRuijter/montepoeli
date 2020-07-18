import { Module } from '@nestjs/common';
import { SyncGameGateway } from './sync-game.gateway';
import { GameModule } from '../game/game.module';

@Module({
    providers: [SyncGameGateway],
    exports: [SyncGameGateway]
})
export class SyncGameModule {
}
