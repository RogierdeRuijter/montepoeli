import {browser, by, element, ElementFinder} from 'protractor';

export class Helper {
  public delayAction(fun: () => any): void {
    this.sleep();
    fun();
  }

  public sleep(): void {
    browser.sleep(200);
  }

  public findById(id: string): ElementFinder {
    return element(by.id(id));
  }

  public getTextOfElement(element: ElementFinder): any {
    return element.getText();
  }
}
