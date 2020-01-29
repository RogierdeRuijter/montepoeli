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
    await page.navigateToBase();

    await browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');
    
    // TODO: refactor adding a user with the pop up to a method

    await page.getMobileAddGameButton().click();

    await page.getWhiteDropDownList().click();

    await page.getProtractorUser().click();

    await browser.waitForAngular();
    expect(await page.getWhiteDropDownField().getText()).toEqual('protractor');

    await page.getWinnerDropDownList().click();

    await page.getBlackOption().click();
    
    await browser.waitForAngular();
    expect(await page.getWinnerDropDownField().getText()).toEqual('Black');

    await page.getBlackDropDownList().click();

    await page.getProtractorUser1().click();
    
    await browser.waitForAngular();
    expect(await page.getBlackDropDownField().getText()).toEqual('protractor1');

    await page.getSaveButton().click();

    await browser.waitForAngular();
    expect(await page.getTableWhiteUserForLastAddedGame().getText()).toEqual('protractor');
    expect(await page.getTableWinnerUserForLastAddedGame('black').getText()).toEqual('Black');
    expect(await page.getTableBlackUserForLastAddedGame().getText()).toEqual('protractor1');

  });

  afterEach(() => helper.expectNoErrorsInConsole(browser));
});
