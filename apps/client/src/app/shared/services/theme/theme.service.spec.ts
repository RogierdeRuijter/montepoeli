import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(query => ({
        matches: undefined
      })),
    });

  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => jest.resetAllMocks());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getThemeBasedOnSystemPreference', () => {
    it('should return black theme when prefers-color-scheme: dark is set to true', () => {
      const darkTheme = true;
      jest.spyOn(window, 'matchMedia').mockReturnValue({matches: darkTheme} as any);
  
      const result = service.getThemeBasedOnSystemPreference();
  
      const expectedResult = 'black-theme';

      expect(result).toBe(expectedResult);
    });

    it('should return light theme when prefers-color-scheme: dark is set to false', () => {
      const darkTheme = false;
      jest.spyOn(window, 'matchMedia').mockReturnValue({matches: darkTheme} as any);

      const result = service.getThemeBasedOnSystemPreference();
  
      const expectedResult = 'light-theme';

      expect(result).toBe(expectedResult);  
    });

    it('should return light theme when prefers-color-scheme: dark is undefined', () => {
  
      const result = service.getThemeBasedOnSystemPreference();
  
      const expectedResult = 'light-theme';

      expect(result).toBe(expectedResult);
    });
  });

  describe('getThemeForColorScheme', () => {
    it('should return black-theme if the input is true', () => {
      const input = true;
      
      const result = service.getThemeForColorScheme(input);
  
      const expectedResult = 'black-theme';

      expect(result).toBe(expectedResult);
    });

    it('should return light-theme if the input is false', () => {
      const input = false;
      
      const result = service.getThemeForColorScheme(input);
  
      const expectedResult = 'light-theme';

      expect(result).toBe(expectedResult);
    });

    it('should return light-theme if the input is undefined', () => {
      const input = undefined;
      
      const result = service.getThemeForColorScheme(input);
  
      const expectedResult = 'light-theme';

      expect(result).toBe(expectedResult);
    });
  });
});
