import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('Add a game', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a game and show it in the table', async () => {
    await page.navigateTo();

    await browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');

    await helper.sleep();
    page.getAddGameButton().click();

    await helper.sleep();
    page.getWhiteDropDownList().click();

    await helper.sleep();
    page.getProtractorUser().click();

    expect(page.getWhiteDropDownField().getText()).toEqual('protractor');

    await helper.sleep();
    page.getWinnerDropDownList().click();

    await helper.sleep();
    page.getWhiteOption().click();

    expect(page.getWinnerDropDownField().getText()).toEqual('White');

    await helper.sleep();
    page.getBlackDropDownList().click();

    await helper.sleep();
    page.getProtractorUser1().click();

    expect(page.getBlackDropDownField().getText()).toEqual('protractor1');

    await helper.sleep();
    page.getSaveButton().click();

    expect(page.getTableWhiteUserForRow(0).getText()).toEqual('protractor');
    expect(page.getTableWinnerUserForRow('white', 0).getText()).toEqual('White');
    expect(page.getTableBlackUserForRow(0).getText()).toEqual('protractor1');

  });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
