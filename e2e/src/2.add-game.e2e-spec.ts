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
    expect(browser.getCurrentUrl()).toContain('/landing');

    await page.navigateTo();

    browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');

    helper.sleep();
    page.getAddGameButton().click();

    helper.sleep();
    page.getWhiteDropDownList().click();

    helper.sleep();
    page.getProtractorUser().click();

    expect(page.getWhiteDropDownField().getText()).toEqual('protractor');

    helper.sleep();
    page.getWinnerDropDownList().click();

    helper.sleep();
    page.getWhiteOption().click();

    expect(page.getWinnerDropDownField().getText()).toEqual('White');

    helper.sleep();
    page.getBlackDropDownList().click();

    helper.sleep();
    page.getProtractorUser1().click();

    expect(page.getBlackDropDownField().getText()).toEqual('protractor1');

    helper.sleep();
    page.getSaveButton().click();

    expect(page.getTableWhiteUserFirstRowText().getText()).toEqual('protractor');
    expect(page.getTableWinnerUserFirstRowText().getText()).toEqual('White');
    expect(page.getTableBlackUserFirstRowText().getText()).toEqual('protractor1');

  });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
