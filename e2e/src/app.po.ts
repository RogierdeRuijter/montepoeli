import {browser, ElementFinder, promise as wdpromise} from 'protractor';
import {Helper} from './helper';

export class AppPage {
  private helper = new Helper();

  public navigateTo(): wdpromise.Promise<any> {
    return browser.get('/');
  }

  public getLoginField(): ElementFinder {
    return this.helper.findById('username');
  }

  public getPasswordField(): ElementFinder {
    return this.helper.findById('password');
  }

  public getSubmitButton(): ElementFinder {
    return this.helper.findById('submit');
  }

  public getLoginFailedWarning(): ElementFinder {
    return this.helper.findByXPath('//*[@id="toast-container"]/div');
  }

  public getAddGameButton(): ElementFinder {
    return this.helper.findById('add-game-button');
  }

  public getWhiteDropDownList(): ElementFinder {
    return this.helper.findById('white-user');
  }

  public getWhiteDropDownField(): ElementFinder {
    return this.helper.findByXPath('//*[@id="white-user"]/div/div[1]/span/span');
  }

  public getProtractorUser(): ElementFinder {
    return this.helper.findById('protractor');
  }

  public getWinnerDropDownList(): ElementFinder {
    return this.helper.findById('winner-user');
  }

  public getWhiteOption(): ElementFinder {
    return this.helper.findById('White');
  }

  public getWinnerDropDownField(): ElementFinder {
    return this.helper.findByXPath('//*[@id="winner-user"]/div/div[1]/span/span');
  }

  public getBlackDropDownList(): ElementFinder {
    return this.helper.findById('black-user');
  }

  public getBlackDropDownField(): ElementFinder {
    return this.helper.findByXPath('//*[@id="black-user"]/div/div[1]/span');
  }

  public getProtractorUser1(): ElementFinder {
    return this.helper.findById('protractor1');
  }

  public getSaveButton(): ElementFinder {
    return this.helper.findById('save');
  }

  public getTableWhiteUserFirstRowText(): ElementFinder {
    return this.helper.findById('table-protractor-0');
  }

  public getTableWinnerUserFirstRowText(): ElementFinder {
    return this.helper.findById('table-white-0');
  }

  public getTableBlackUserFirstRowText(): ElementFinder {
    return this.helper.findById('table-protractor1-0');
  }

}
