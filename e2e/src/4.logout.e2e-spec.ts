import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('montepoeli login', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/home');

    page.getLogout().click();

    expect(browser.getCurrentUrl()).toContain('/login');

    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
