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

    expect(page.getTableWhiteUserForLastAddedGame().getText()).toEqual('protractor');
    expect(page.getTableWinnerUserForLastAddedGame('white').getText()).toEqual('White');
    expect(page.getTableBlackUserForLastAddedGame().getText()).toEqual('protractor1');

  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});
