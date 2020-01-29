import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('Tab navigation', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should switch to the rules tab and back to the games tab', async () => {
    await page.navigateToBase();

    await browser.waitForAngular();

    await page.getNavBarRulesTab().click();
    
    await browser.waitForAngular();
    expect(await page.getRulesView()).toBeTruthy();
    
    await page.getNavBarGamesTab().click();
    
    await browser.waitForAngular();
    expect(await page.getGamesView()).toBeTruthy();
  });

  afterEach(() => helper.expectNoErrorsInConsole(browser));
});
