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
    await page.navigateToBase();

    expect(await browser.getCurrentUrl()).toContain('/home');

    await page.getUserSettings().click();
    await page.getLogout().click();
    
    await browser.waitForAngular();

    expect(await browser.getCurrentUrl()).toContain('/login');
    
    await page.navigateToHome();
    
    expect(await browser.getCurrentUrl()).toContain('/login');

    helper.expectNoErrorsInConsole(browser);
  });
});
