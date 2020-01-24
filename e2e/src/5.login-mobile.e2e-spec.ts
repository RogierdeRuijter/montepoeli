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
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test');
  
    page.getSubmitButton().click();
  
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/home');

    helper.expectNoErrorsInConsole(browser);
  });
});
