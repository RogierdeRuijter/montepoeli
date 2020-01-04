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
    helper.sleep();
    page.getPasswordField().sendKeys('test1234');
    helper.sleep();
    page.getSubmitButton().click();
    helper.shortSleep();

    expect(browser.getCurrentUrl()).toContain('/login');
    
    expect(page.getLoginFailedWarning().getText()).toEqual('Wrong username or password.');

    helper.expectThreeErrorsInConsole(browser);
  });

  it('should login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');
    helper.sleep();
    page.getPasswordField().sendKeys('test');
    helper.sleep();
    page.getSubmitButton().click();
    helper.sleep();

    expect(browser.getCurrentUrl()).toContain('/home');

    helper.expectNoErrorsInConsole(browser);
  });
});
