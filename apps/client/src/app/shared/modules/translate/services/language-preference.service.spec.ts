import { TestBed } from '@angular/core/testing';

import { LanguagePreferenceService } from './language-preference.service';
import { TranslateTestingModule } from '../../../../testing/translate-testing.module';
import { MockLocationStrategy } from '@angular/common/testing';
import { UserService } from '../../../services/users/user.service';

describe('LanguagePreferenceService', () => {
  let service: LanguagePreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateTestingModule],
      providers: [{ provide: UserService, useClass: MockLocationStrategy }],
    });
    service = TestBed.inject(LanguagePreferenceService);
  });

  afterEach(() => jest.resetAllMocks());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return "nl" if it is inside local storage', () => {
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('nl');

      const result = service.get();

      const expectedResult = 'nl';

      expect(result).toEqual(expectedResult);
    });

    it('should return "en" if it is inside local storage', () => {
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('en');

      const result = service.get();

      const expectedResult = 'en';

      expect(result).toEqual(expectedResult);
    });

    it('should return "en" if there is nothing set in local storage', () => {
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(undefined);

      const result = service.get();

      const expectedResult = 'en';

      expect(result).toEqual(expectedResult);
    });
  });

  // TODO: this method should be broken down. Checking a global state after a unit test is not a good idea
  //  The method should return something that is checked
  // describe('setWithUser', () => {
  //   it('should use the user with dutch preference to set nl in local storage', () => {
  //     const user: User = {
  //       name: 'Harry',
  //       preferedLanguage: 'dutch'
  //     };

  //     service.setWithUser(user);

  //     const result = localStorage.getItem('preferedLanguage');
  //     const expectedResult = 'nl';

  //     expect(result).toEqual(expectedResult);
  //   });

  //   it('should use the user with english preference to set english in local storage', () => {
  //     const user: User = {
  //       name: 'Harry',
  //       preferedLanguage: 'english'
  //     };

  //     service.setWithUser(user);

  //     const result = localStorage.getItem('preferedLanguage');
  //     const expectedResult = 'en';

  //     expect(result).toEqual(expectedResult);
  //   });

  //   it('should set en in local storage if the user has an unkown language', () => {
  //     const user: User = {
  //       name: 'Harry',
  //       preferedLanguage: 'german'
  //     };

  //     service.setWithUser(user);

  //     const result = localStorage.getItem('preferedLanguage');
  //     const expectedResult = 'en';

  //     expect(result).toEqual(expectedResult);
  //   });
  // });
});
