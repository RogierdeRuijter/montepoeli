import {AppPage} from './app.po';
import {browser} from 'protractor';
import { Helper } from './helper';

const helper = new Helper();

describe('montepoeli login', () => {
  let page: AppPage;
  
  beforeAll(() => {
    const width = helper.mobileWidth;
    const height = helper.mobileHeigth;

    browser.driver.manage().window().setSize(width, height);
  });

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

    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
