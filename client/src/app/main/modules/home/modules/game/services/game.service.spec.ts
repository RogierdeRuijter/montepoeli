import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../../../../../shared/services/environment/environment.service';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      TranslateTestingModule
    ],
    providers: [
      EnvironmentService
    ]
  }));

  it('should be created', () => {
    const service: GameService = TestBed.inject(GameService);
    expect(service).toBeTruthy();
  });

  describe('postProcessGame', () => {
    it('should swap draw for a -', () => {
      const service: GameService = TestBed.inject(GameService);

      const input: Game = {
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: null
      };
      const result = service.postProcessGame(input);

      const expectedResult: Game = {
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Draw'
      };
      
      expect(result).toEqual(expectedResult);
    });

    it('should be an identify funtion if the winner field does not contain draw', () => {
      const service: GameService = TestBed.inject(GameService);

      const input: Game = {
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Rogier'
      };
      const result = service.postProcessGame(input);

      const expectedResult: Game = {
        white: 'Rogier',
        black: 'Jefrey Bossers',
        winner: 'Rogier'
      };
      
      expect(result).toEqual(expectedResult);
    });
  });
});
