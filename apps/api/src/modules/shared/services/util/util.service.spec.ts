import {Test, TestingModule} from '@nestjs/testing';
import {UtilService} from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilService],
    }).compile();

    service = module.get<UtilService>(UtilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('isNullOrUndefined', () => {
    it('should return true if null is passed', () => {
      const input = null;

      const result = service.isNullOrUndefined(input);

      const output = true;

      expect(result).toEqual(output);
    });

    it('should return true if undefined is passed', () => {
      const input = undefined;

      const result = service.isNullOrUndefined(input);

      const output = true;

      expect(result).toEqual(output);
    });

    it('should return false if empty string is passed', () => {
      const input = '';

      const result = service.isNullOrUndefined(input);

      const output = false;

      expect(result).toEqual(output);
    });

    it('should return false if empty object is passed', () => {
      const input = {};

      const result = service.isNullOrUndefined(input);

      const output = false;

      expect(result).toEqual(output);
    });
  });
});
