import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('Add a game', () => {
  let page: AppPage;
  
  beforeAll(() => {
    helper.setBrowserToMobileSize(browser);
  });

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a game and show it in the table', async () => {
    await page.navigateTo();

    await browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');
    // TODO: refactor adding a user with the pop up to a method
    await helper.sleep();
    page.getMobileAddGameButton().click();

    await helper.sleep();
    page.getWhiteDropDownList().click();

    await helper.sleep();
    page.getProtractorUser().click();

    expect(page.getWhiteDropDownField().getText()).toEqual('protractor');

    await helper.sleep();
    page.getWinnerDropDownList().click();

    await helper.sleep();
    page.getBlackOption().click();

    expect(page.getWinnerDropDownField().getText()).toEqual('Black');

    await helper.sleep();
    page.getBlackDropDownList().click();

    await helper.sleep();
    page.getProtractorUser1().click();

    expect(page.getBlackDropDownField().getText()).toEqual('protractor1');

    await helper.sleep();
    page.getSaveButton().click();

    await helper.sleep();
    expect(page.getTableWhiteUserForRow(1).getText()).toEqual('protractor');
    expect(page.getTableWinnerUserForRow('black', 0).getText()).toEqual('Black');
    expect(page.getTableBlackUserForRow(1).getText()).toEqual('protractor1');

  });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog) => {
      expect(browserLog.length).toEqual(0);
    });
  });
});
