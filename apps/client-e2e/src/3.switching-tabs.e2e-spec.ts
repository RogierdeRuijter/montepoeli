import { AppPage } from './app.po';
import { browser } from 'protractor';
import { Helper } from './helper';

const helper = new Helper();

describe('Tab navigation', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should switch to the rules tab and back to the games tab', () => {
    page.navigateToBase();

    browser.waitForAngular();

    page.getNavBarRulesTab().click();

    browser.waitForAngular();
    expect(page.getRulesView()).toBeTruthy();

    page.getNavBarGamesTab().click();

    browser.waitForAngular();
    expect(page.getGamesView()).toBeTruthy();
  });

  afterEach(() => helper.expectNoErrorsInConsole(browser));
});
