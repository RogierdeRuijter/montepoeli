import { Test, TestingModule } from '@nestjs/testing';
import { SyncGameGateway } from './sync-game.gateway';

describe('SyncGameGateway', () => {
  let gateway: SyncGameGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyncGameGateway],
    }).compile();

    gateway = module.get<SyncGameGateway>(SyncGameGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
