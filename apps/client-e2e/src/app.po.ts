import { browser, ElementFinder, promise as wdpromise } from 'protractor';
import { Helper } from './helper';

export class AppPage {
  private helper = new Helper();

  public navigateToBase(): wdpromise.Promise<any> {
    return browser.get('/');
  }

  public navigateToHome(): wdpromise.Promise<any> {
    return browser.get('/home');
  }

  public getLoginField(): ElementFinder {
    return this.helper.findById('username');
  }

  public getPasswordField(): ElementFinder {
    return this.helper.findById('password');
  }

  public getSubmitButton(): ElementFinder {
    return this.helper.selectLastElementWithId('submit');
  }

  public getLoginFailedWarning(): ElementFinder {
    return this.helper.findByXPath('//*[@id="toast-container"]/div');
  }

  public getAddGameButton(): ElementFinder {
    return this.helper.selectLastElementWithId('add-game-button');
  }

  public getWhiteSelectedChip(name: string): ElementFinder {
    return this.helper.selectLastElementWithId('white-' + name);
  }

  public getUser(id: string): ElementFinder {
    return this.helper.selectLastElementWithId(id);
  }

  public getBlackSelectedChip(name: string): ElementFinder {
    return this.helper.selectLastElementWithId('black-' + name);
  }

  public getWinnerSelectedChip(name: string): ElementFinder {
    return this.helper.selectLastElementWithId('winner-' + name);
  }

  public getSaveButton(): ElementFinder {
    return this.helper.selectLastElementWithId('save');
  }

  public getTableWhiteUserForLastAddedGame(): ElementFinder {
    return this.helper.selectLastElementWithId('table-protractor-0');
  }

  public getTableWinnerUserForLastAddedGame(winner: string): ElementFinder {
    return this.helper.findById('table-' + winner + '-0');
  }

  public getTableBlackUserForLastAddedGame(): ElementFinder {
    return this.helper.selectLastElementWithId('table-protractor1-0');
  }

  public getGamesView(): ElementFinder {
    return this.helper.findById('games');
  }

  public getRulesView(): ElementFinder {
    return this.helper.findById('rules');
  }

  public getNavBarGamesTab(): ElementFinder {
    return this.helper.findById('mat-tab-label-0-0');
  }

  public getNavBarRulesTab(): ElementFinder {
    return this.helper.findById('mat-tab-label-0-1');
  }

  public getMobileNavButtonGames(): ElementFinder {
    return this.helper.findById('games-tab');
  }

  public getMobileAddGameButton(): ElementFinder {
    return this.helper.selectLastElementWithId('add-game-footer');
  }

  public getMobileNavButtonRules(): ElementFinder {
    return this.helper.findById('rules-tab');
  }

  public getUserSettings(): ElementFinder {
    return this.helper.selectLastElementWithId('user-settings');
  }

  public getLogout(): ElementFinder {
    return this.helper.findById('logout');
  }
}
