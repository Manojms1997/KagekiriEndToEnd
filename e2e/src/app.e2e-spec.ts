import { AppPage } from './app.po';
// import { querySelector, querySelectorAll } from 'kagekiri';
import { AppComponentHarness } from '../../src/app/AppComponentHarness';
import { HarnessLoader } from '@angular/cdk/testing';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { browser, logging, ElementFinder, by, element as protractorElement } from 'protractor';

declare var kagekiri;

export const piercingQueryFn = (selector: string, root: ElementFinder) => protractorElement.all(by.js(
    (s: string, r: Element) => kagekiri.querySelectorAll(s, r), selector, root.getWebElement()));

describe('workspace-project App', () => {
  let page: AppPage;
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should get div with class second from kagekiri queryselector", async() => {
    page.navigateTo();
    browser.executeScript('var imported = document.createElement("script"); imported.src = "./assets/kagekiri.umd.js"; document.head.appendChild(imported);');
    harnessLoader = ProtractorHarnessEnvironment.loader({queryFn: piercingQueryFn});
    const AppHarness = await harnessLoader.getHarness(AppComponentHarness);
    await AppHarness.getSecondDivContent().then(async(value) => {
      expect(value).toEqual('second');
    })
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
