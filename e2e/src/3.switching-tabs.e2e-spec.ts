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

    expect(browser.getCurrentUrl()).toContain('/login');
    helper.sleep();
    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test');
    helper.sleep();

    page.getSubmitButton().click();
    helper.sleep();

    page.getNavBarRulesTab().click();
    helper.sleep();

    expect(page.getRulesView()).toBeTruthy();
    helper.sleep();

    page.getNavBarGamesTab().click();
    helper.sleep();

    expect(page.getGamesView()).toBeTruthy();
  });
});
