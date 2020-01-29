import {AppPage} from './app.po';
import {browser} from 'protractor';
import { Helper } from './helper';

describe('montepoeli login', () => {
  let page: AppPage;
  const helper = new Helper();

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fail login into montepouli', async () => {
    await page.navigateToBase();
    
    expect(await browser.getCurrentUrl()).toContain('/login');

    await page.getLoginField().sendKeys('protractor');

    await page.getPasswordField().sendKeys('test1234');

    await page.getSubmitButton().click();
    
    await helper.sleep();

    expect(await page.getLoginFailedWarning().getText()).toEqual('Wrong username or password.');

    expect(await browser.getCurrentUrl()).toContain('/login');
    
    helper.expectThreeErrorsInConsole(browser);
  });

  it('should login to montepouli', async () => {
    await page.navigateToBase();
    expect(await browser.getCurrentUrl()).toContain('/login');

    await page.getLoginField().sendKeys('protractor');

    await page.getPasswordField().sendKeys('test');
    
    await page.getSubmitButton().click();
    
    await browser.waitForAngular();
    
    expect(await browser.getCurrentUrl()).toContain('/home');

    helper.expectNoErrorsInConsole(browser);
  });
});
