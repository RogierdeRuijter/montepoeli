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

    expect(page.getTableWhiteUserForLastAddedGame().getText()).toEqual('protractor');
    expect(page.getTableWinnerUserForLastAddedGame('white').getText()).toEqual('White');
    expect(page.getTableBlackUserForLastAddedGame().getText()).toEqual('protractor1');

  });

  afterEach(() => {
    helper.expectNoErrorsInConsole(browser);
  });
});
