import {AppPage} from './app.po';
import {browser} from 'protractor';
import { Helper } from './helper';

const helper = new Helper();

describe('montepoeli login', () => {
  let page: AppPage;
  
  beforeAll(() => {
    helper.setBrowserToMobileSize(browser);
  });

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login to montepouli', async () => {
    await page.navigateToBase();
    await expect(await browser.getCurrentUrl()).toContain('/login');

    await page.getLoginField().sendKeys('protractor');

    await page.getPasswordField().sendKeys('test');
  
    await page.getSubmitButton().click();
  
    await browser.waitForAngular();
    await expect(await browser.getCurrentUrl()).toContain('/home');

    helper.expectNoErrorsInConsole(browser);
  });
});
