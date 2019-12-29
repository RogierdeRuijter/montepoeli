import {browser, by, element, ElementFinder} from 'protractor';

export class Helper {
  public mobileWidth = 320;
  public mobileHeigth = 568;

  public delayAction(fun: () => any): void {
    this.sleep();
    fun();
  }

  public async sleep(): Promise<any> {
    return browser.sleep(200);
  }

  public async longSleep(): Promise<any> {
    return browser.sleep(500);
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
    browser.driver.manage().window().setSize(this.mobileHeigth, this.mobileWidth);
  }

  public deleteAllCookies(browser: any): void {
    browser.driver.manage().deleteAllCookies();
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
    browser.manage().logs().get('browser').then((browserLog) => {
      const numberOfErrors = browserLog.length;
      expect(numberOfErrors).toEqual(numberOfExpectedErrors);

      if (numberOfErrors !== numberOfExpectedErrors) {
        console.log(browserLog);
      }
    });
  }
}
