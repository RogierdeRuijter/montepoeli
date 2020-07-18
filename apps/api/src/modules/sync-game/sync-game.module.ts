import { Module } from '@nestjs/common';
import { SyncGameGateway } from './sync-game.gateway';
import { GameModule } from '../game/game.module';

@Module({
    imports: [
        GameModule
    ],
    providers: [SyncGameGateway]
})
export class SyncGameModule {
}
