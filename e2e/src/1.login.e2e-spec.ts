import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('montepoeli login', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
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
    browser.sleep(100);

    expect(page.getLoginFailedWarning().getText()).toEqual('Wrong username or password.');
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(3);
    });
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

    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
