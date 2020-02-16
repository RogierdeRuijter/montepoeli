import { TestBed } from '@angular/core/testing';

import { LanguagePreferenceService } from './language-preference.service';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';
import { MockLocationStrategy } from '@angular/common/testing';
import { UserService } from 'src/app/shared/services/users/user.service';

describe('LanguagePreferenceService', () => {
  let service: LanguagePreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule
      ],
      providers: [
        {provide: UserService, useClass: MockLocationStrategy},
      ]
    });
    service = TestBed.inject(LanguagePreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
