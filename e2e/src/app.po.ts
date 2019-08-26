import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  public getLoginField() {
    return element(by.id('username'));
  }

  public getPasswordField() {
    return element(by.id('password'));
  }

  public getSubmitButton() {
    return element(by.id('submit'));
  }


}
