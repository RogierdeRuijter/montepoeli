import {AppPage} from './app.po';
import {browser} from 'protractor';
import { Helper } from './helper';

describe('montepoeli login', () => {
  let page: AppPage;
  const helper = new Helper();

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fail login into montepouli', () => {
    page.navigateToBase();
    
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test1234');

    page.getSubmitButton().click();
    
    helper.sleep();
    const loginFailedWarning = page.getLoginFailedWarning().getText();

    expect(loginFailedWarning).toEqual('Wrong username or password.');

    expect(browser.getCurrentUrl()).toContain('/login');
    
    helper.expectThreeErrorsInConsole(browser);
  });

  it('should login to montepouli', () => {
    page.navigateToBase();
    expect(browser.getCurrentUrl()).toContain('/login');

    page.getLoginField().sendKeys('protractor');

    page.getPasswordField().sendKeys('test');
    
    page.getSubmitButton().click();
    
    browser.waitForAngular();
    
    expect(browser.getCurrentUrl()).toContain('/home');

    helper.expectNoErrorsInConsole(browser);
  });
});
