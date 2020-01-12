import {AppPage} from './app.po';
import {browser} from 'protractor';
import { Helper } from './helper';

describe('montepoeli login', () => {
  let page: AppPage;
  const helper = new Helper();

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fail login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test1234');

    page.getSubmitButton().click();
    
    browser.waitForAngular();

    expect(await page.getLoginFailedWarning().getText()).toEqual('Wrong username or password.');

    expect(browser.getCurrentUrl()).toContain('/login');
    
    helper.expectThreeErrorsInConsole(browser);
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
