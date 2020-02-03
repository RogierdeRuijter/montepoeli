import {AppPage} from './app.po';
import {browser} from 'protractor';
import {Helper} from './helper';

const helper = new Helper();

describe('Add a game', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a game and show it in the table', () => {
    page.navigateToBase();

    browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');

    page.getAddGameButton().click();

    const game: any = {
      white: 'protractor',
      black: 'protractor1',
      winner: 'protractor'
    }

    helper.addGame(page, browser, game);
    
    browser.waitForAngular();
    
    helper.checkIfGameIsAddedSuccesfully(page, game);

  });

  afterEach(() => helper.expectNoErrorsInConsole(browser));
});
