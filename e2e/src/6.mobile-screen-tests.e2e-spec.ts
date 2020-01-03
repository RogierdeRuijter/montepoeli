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

    helper.longSleep();
    
    expect(page.getMobileNavButtonGames()).toBeTruthy();
    expect(page.getMobileAddGameButton().getCssValue('opacity')).toEqual('0');
    expect(page.getMobileAddGameButton().getCssValue('pointer-events')).toEqual('none');
    expect(page.getMobileNavButtonRules()).toBeTruthy();

    helper.sleep();

    page.getMobileNavButtonGames().click();

    helper.sleep();

    expect(page.getGamesView()).toBeTruthy();

    helper.longSleep();
  
    expect(page.getMobileNavButtonGames()).toBeTruthy();
    expect(page.getMobileAddGameButton().getCssValue('opacity')).toEqual('1');    
    expect(page.getMobileNavButtonRules()).toBeTruthy();
  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});