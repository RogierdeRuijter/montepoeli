import {TestBed} from '@angular/core/testing';

import {DialogDataService} from './dialog-data.service';
import { Game } from 'src/app/shared/interfaces/game.interface';

describe('DialogDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DialogDataService]
  }));

  it('should be created', () => {
    const service: DialogDataService = TestBed.inject(DialogDataService);
    expect(service).toBeTruthy();
  });

  describe('allFieldsAreDefined', () => {
    it('should return true when all fields are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: Game = {
        black: 'Sjonny',
        white: 'Anita',
        winner: 'Anita'
      };
  
      const output = service.allFieldsAreDefined(game);

      const expected = true;

      expect(output).toBe(expected);
    });

    it('should return false when not all game fields are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: Game = {
        black: 'Sjonny',
        white: undefined,
        winner: undefined
      };
  
      const output = service.allFieldsAreDefined(game);

      const expected = false;

      expect(output).toBe(expected);
    });
  });

  describe('userAreDefined', () => {
    it('should return true when the black and white user are filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: any = {
        black: 'Sjonny',
        white: 'Anita'
      };

      const output = service.userAreDefined(game);

      const expected = true;

      expect(output).toBe(expected);
    });

    it('should return false when only the black user is filled', () => {
      const service: DialogDataService = TestBed.inject(DialogDataService);

      const game: any = {
        black: 'Sjonny'
      };

      const output = service.userAreDefined(game);

      const expected = false;

      expect(output).toBe(expected);
    });
  });
});
