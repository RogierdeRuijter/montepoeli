import { AppPage } from './app.po';
import { browser } from 'protractor';
import { Helper } from './helper';

const helper = new Helper();

describe('Mobile screen tests', () => {
  let page: AppPage;

  beforeAll(() => {
    helper.setBrowserToMobileSize(browser);
  });

  beforeEach(() => {
    page = new AppPage();
  });

  it('should switch to the rules tab and back to the games tab', async () => {
    await page.navigateTo();

    browser.waitForAngular();

    page.getMobileNavButtonRules().click();
    helper.sleep();

    expect(page.getRulesView()).toBeTruthy();

    helper.sleep();
    
    expect(page.getMobileNavButtonGames()).toBeTruthy();
    expect(page.getMobileAddGameButton()).toBeFalsy();
    expect(page.getMobileNavButtonRules()).toBeTruthy();

    helper.sleep();

    page.getMobileNavButtonGames().click();

    helper.sleep();

    expect(page.getGamesView()).toBeTruthy();

    helper.sleep();

    expect(page.getMobileNavButtonGames()).toBeTruthy();
    expect(page.getMobileAddGameButton()).toBeTruthy();
    expect(page.getMobileNavButtonRules()).toBeTruthy();
  });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
