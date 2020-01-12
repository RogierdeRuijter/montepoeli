import { AppPage } from './app.po';
import { browser } from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('montepoeli', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should logout from montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/home');

    page.getUserSettings().click();
    page.getLogout().click();
    
    browser.waitForAngular();

    expect(browser.getCurrentUrl()).toContain('/login');
    
    helper.expectNoErrorsInConsole(browser);
  });
});
