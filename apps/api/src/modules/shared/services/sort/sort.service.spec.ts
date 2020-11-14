import { Test, TestingModule } from '@nestjs/testing';
import { SortService } from './sort.service';

describe('SortService', () => {
  let service: SortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortService],
    }).compile();

    service = module.get<SortService>(SortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('sortByDateDescending', () => {
    it('should handle an empty list', () => {
      const input = [];

      const result = service.sortByDateDescending(input);

      const output = [];

      expect(result).toEqual(output);
    });

    it('should handle one entry in the list', () => {
      const input = [{ date: new Date(1000) }];

      const result = service.sortByDateDescending(input);

      const output = [{ date: new Date(1000) }];

      expect(result).toEqual(output);
    });

    it('should sort the list by the last date first', () => {
      const input = [
        { date: new Date(1000) },
        { date: new Date(1800) },
        { date: new Date(1400) },
        { date: new Date(1200) },
      ];

      const result = service.sortByDateDescending(input);

      const output = [
        { date: new Date(1800) },
        { date: new Date(1400) },
        { date: new Date(1200) },
        { date: new Date(1000) },
      ];

      expect(result).toEqual(output);
    });

    it('should not sort the list ascending', () => {
      const input = [
        { date: new Date(1000) },
        { date: new Date(1800) },
        { date: new Date(1400) },
        { date: new Date(1200) },
      ];
      const result = service.sortByDateDescending(input);

      const output = [
        { date: new Date(1000) },
        { date: new Date(1200) },
        { date: new Date(1400) },
        { date: new Date(1800) },
      ];

      expect(result).not.toEqual(output);
    });
  });

  describe('sortByDateAscending', () => {
    it('should handle an empty list', () => {
      const input = [];

      const result = service.sortByDateAscending(input);

      const output = [];

      expect(result).toEqual(output);
    });

    it('should handle one entry in a list', () => {
      const input = [{ date: new Date(1000) }];

      const result = service.sortByDateAscending(input);

      const output = [{ date: new Date(1000) }];

      expect(result).toEqual(output);
    });

    it('should sort the list by the first date first', () => {
      const input = [
        { date: new Date(1000) },
        { date: new Date(1800) },
        { date: new Date(1400) },
        { date: new Date(1200) },
      ];

      const result = service.sortByDateAscending(input);

      const output = [
        { date: new Date(1000) },
        { date: new Date(1200) },
        { date: new Date(1400) },
        { date: new Date(1800) },
      ];

      expect(result).toEqual(output);
    });
  });
});
