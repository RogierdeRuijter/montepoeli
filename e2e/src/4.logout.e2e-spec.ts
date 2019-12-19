import { AppPage } from './app.po';
import { browser } from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('montepoeli', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should logout to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/home');

    page.getUserSettings().click();
    page.getLogout().click();
    helper.sleep();

    expect(browser.getCurrentUrl()).toContain('/login');

    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
