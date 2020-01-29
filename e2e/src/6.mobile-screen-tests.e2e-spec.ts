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
    await page.navigateToBase();

    await helper.sleep();

    await page.getMobileNavButtonRules().click();
  
    await helper.longSleep();

    expect(await page.getRulesView()).toBeTruthy();
    
    expect(await page.getMobileNavButtonGames()).toBeTruthy();
    expect(await page.getMobileAddGameButton().getCssValue('opacity')).toEqual('0');
    expect(await page.getMobileAddGameButton().getCssValue('pointer-events')).toEqual('none');
    expect(await page.getMobileNavButtonRules()).toBeTruthy();

    await helper.sleep();

    await page.getMobileNavButtonGames().click();

    await helper.longSleep();
    
    expect(await page.getGamesView()).toBeTruthy();

    expect(await page.getMobileNavButtonGames()).toBeTruthy();
    expect(await page.getMobileAddGameButton().getCssValue('opacity')).toEqual('1');    
    expect(await page.getMobileNavButtonRules()).toBeTruthy();
  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});
