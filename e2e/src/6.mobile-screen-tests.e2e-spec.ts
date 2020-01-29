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

    await expect(await page.getRulesView()).toBeTruthy();
    
    await expect(await page.getMobileNavButtonGames()).toBeTruthy();
    await expect(await page.getMobileAddGameButton().getCssValue('opacity')).toEqual('0');
    await expect(await page.getMobileAddGameButton().getCssValue('pointer-events')).toEqual('none');
    await expect(await page.getMobileNavButtonRules()).toBeTruthy();

    await helper.sleep();

    await page.getMobileNavButtonGames().click();

    await helper.longSleep();
    
    await expect(await page.getGamesView()).toBeTruthy();

    await expect(await page.getMobileNavButtonGames()).toBeTruthy();
    await expect(await page.getMobileAddGameButton().getCssValue('opacity')).toEqual('1');    
    await expect(await page.getMobileNavButtonRules()).toBeTruthy();
  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});
