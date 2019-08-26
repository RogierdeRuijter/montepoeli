import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {

  });

  beforeEach(() => {
    page = new AppPage();
  });

  it('Login to montepouli', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');
    browser.sleep(1000);
    page.getPasswordField().sendKeys('test');
    browser.sleep(1000);
    page.getSubmitButton().click();
    browser.sleep(1000);

    expect(browser.getCurrentUrl()).toContain('/home');
    console.log(await browser.manage().getCookies());
  });

  afterAll(() => {

  });
});
