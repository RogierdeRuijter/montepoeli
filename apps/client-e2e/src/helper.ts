/* tslint:disable */
import { browser, by, element, ElementFinder } from 'protractor';

export class Helper {
  public mobileWidth = 320;
  public mobileHeigth = 568;

  public delayAction(fun: () => any): void {
    this.sleep();
    fun();
  }

  public async shortSleep(): Promise<any> {
    return this.sleepForSeconds(100);
  }

  public async sleep(): Promise<any> {
    return this.sleepForSeconds(200);
  }

  public async longSleep(): Promise<any> {
    return this.sleepForSeconds(500);
  }

  private async sleepForSeconds(seconds: number): Promise<any> {
    return browser.sleep(seconds);
  }

  public findById(id: string): ElementFinder {
    return element(by.id(id));
  }

  public selectLastElementWithId(id: string): ElementFinder {
    return element.all(by.id(id)).last();
  }

  public findByCss(css: string): ElementFinder {
    return element(by.css(css));
  }

  public findByXPath(xpath: string): ElementFinder {
    return element(by.xpath(xpath));
  }

  public getTextOfElement(element: ElementFinder): any {
    return element.getText();
  }

  public setBrowserToMobileSize(browser: any): void {
    browser.driver.manage().window().setSize(this.mobileWidth, this.mobileHeigth);
  }

  public deleteAllCookies(browser: any): void {
    browser.driver.manage().deleteAllCookies();
  }

  public printAllCookies(browser: any): void {
    browser
      .manage()
      .getCookies()
      .then((cookies) => {
        console.log(cookies);
      });
  }

  public expectNoErrorsInConsole(browser: any): void {
    const numberOfExpectedErrors = 0;

    this.expectErrorsInConsole(browser, numberOfExpectedErrors);
  }

  public expectThreeErrorsInConsole(browser: any): void {
    const numberOfExpectedErrors = 3;

    this.expectErrorsInConsole(browser, numberOfExpectedErrors);
  }

  private expectErrorsInConsole(browser: any, numberOfExpectedErrors: number): void {
    browser.driver.getCapabilities().then((caps) => {
      if (caps.get('browserName') === 'chrome') {
        // TODO: find way to access logs in firefox
        browser
          .manage()
          .logs()
          .get('browser')
          .then((browserLog) => {
            const numberOfErrors = browserLog.length;
            expect(numberOfErrors).toEqual(numberOfExpectedErrors);

            if (numberOfErrors !== numberOfExpectedErrors) {
              console.log(browserLog);
            }
          });
      }
    });
  }

  public addGame(page: any, browser: any, game: any): void {
    const lightSelectedColor = 'rgba(255, 204, 128, 1)';
    const darkSelectedColor = 'rgba(224, 224, 224, 1)';

    page.getUser('white-' + game.white).click();

    this.sleep();

    expect(page.getWhiteSelectedChip(game.white).getCssValue('background-color')).toEqual(darkSelectedColor);

    page.getUser('black-' + game.black).click();

    this.sleep();

    expect(page.getBlackSelectedChip(game.black).getCssValue('background-color')).toEqual(darkSelectedColor);

    page.getUser('winner-' + game.winner).click();

    this.sleep();

    expect(page.getWinnerSelectedChip(game.winner).getCssValue('background-color')).toEqual(darkSelectedColor);

    page.getSaveButton().click();
  }

  public checkIfGameIsAddedSuccesfully(page: any, game: any): void {
    expect(page.getTableWhiteUserForLastAddedGame().getText()).toEqual(game.white);
    expect(page.getTableBlackUserForLastAddedGame().getText()).toEqual(game.black);
    expect(page.getTableWinnerUserForLastAddedGame(game.winner).getText()).toEqual(game.winner);
  }
}
