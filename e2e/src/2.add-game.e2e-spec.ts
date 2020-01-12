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

    page.getAddGameButton().click();

    page.getWhiteDropDownList().click();

    page.getProtractorUser().click();

    browser.waitForAngular();
    expect(page.getWhiteDropDownField().getText()).toEqual('protractor');

    page.getWinnerDropDownList().click();

    page.getWhiteOption().click();

    browser.waitForAngular();
    expect(page.getWinnerDropDownField().getText()).toEqual('White');

    page.getBlackDropDownList().click();

    page.getProtractorUser1().click();
    
    browser.waitForAngular();
    expect(page.getBlackDropDownField().getText()).toEqual('protractor1');

    page.getSaveButton().click();
    
    browser.waitForAngular();
    expect(page.getTableWhiteUserForLastAddedGame().getText()).toEqual('protractor');
    expect(page.getTableWinnerUserForLastAddedGame('white').getText()).toEqual('White');
    expect(page.getTableBlackUserForLastAddedGame().getText()).toEqual('protractor1');

  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});
