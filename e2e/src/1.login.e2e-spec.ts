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
    
    await expect(await browser.getCurrentUrl()).toContain('/login');

    await page.getLoginField().sendKeys('protractor');

    await page.getPasswordField().sendKeys('test1234');

    await page.getSubmitButton().click();
    
    await helper.sleep();
    const loginFailedWarning = await page.getLoginFailedWarning().getText();

    await expect(loginFailedWarning).toEqual('Wrong username or password.');

    await expect(await browser.getCurrentUrl()).toContain('/login');
    
    helper.expectThreeErrorsInConsole(browser);
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
