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

  public findById(id: string): ElementFinder {
    return element(by.id(id));
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
}
