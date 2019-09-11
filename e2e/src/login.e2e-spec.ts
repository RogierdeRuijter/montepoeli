import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('montepoeli login', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');
    browser.sleep(1000);
    page.getPasswordField().sendKeys('test');
    browser.sleep(1000);
    page.getSubmitButton().click();
    browser.sleep(1000);

    expect(browser.getCurrentUrl()).toContain('/home');
  });

  it('should fail login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');
    browser.sleep(1000);
    page.getPasswordField().sendKeys('test1234');
    browser.sleep(1000);
    page.getSubmitButton().click();
    browser.sleep(1000);

    expect(browser.getCurrentUrl()).toContain('/login');
  });
});
