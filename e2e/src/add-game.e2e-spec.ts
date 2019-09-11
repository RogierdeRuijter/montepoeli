import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('Add a game', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login to montepouli', async () => {
    await page.navigateTo();

    expect(browser.getCurrentUrl()).toContain('/login');
    helper.sleep();
    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test');
    helper.sleep();

    page.getSubmitButton().click();
    helper.sleep();

    expect(browser.getCurrentUrl()).toContain('/home');

    helper.sleep();
    page.getAddGameButton().click();

    helper.sleep();
    page.getWhiteDropDownList().click();

    helper.sleep();
    page.getProtractorUser().click();

    expect(page.getWhiteDropDownList().getText()).toEqual('protractor');

    helper.sleep();
    page.getWinnerDropDownList().click();

    helper.sleep();
    page.getWhiteOption().click();

    expect(page.getWhiteOption().getText()).toEqual('White');

    helper.sleep();
    page.getBlackDropDownList().click();

    helper.sleep();
    page.getProtractorUser1().click();

    expect(page.getWhiteOption().getText()).toEqual('protractor1');

    helper.sleep();
    page.getSaveButton().click();

    expect(page.getTableWhiteUserFirstRowText().getText()).toEqual('protractor');
    expect(page.getTableWinnerUserFirstRowText().getText()).toEqual('White');
    expect(page.getTableBlackUserFirstRowText().getText()).toEqual('protractor1');

  });
});
