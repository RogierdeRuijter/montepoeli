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
    await page.navigateTo();

    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/overview/games');

    page.getNavBarRulesTab().click();
    helper.sleep();
    
    expect(browser.getCurrentUrl()).toContain('/overview/rules');
    expect(page.getRulesView()).toBeTruthy();
    helper.sleep();

    page.getNavBarGamesTab().click();
    helper.sleep();

    expect(browser.getCurrentUrl()).toContain('/overview/games');
    expect(page.getGamesView()).toBeTruthy();
  });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
