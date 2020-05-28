import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { querySelector, querySelectorAll } from 'kagekiri';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should get div with class second from kagekiri queryselector", async() => {
    page.navigateTo();
    const secondDiv = querySelector('.second');
    const divText = secondDiv.textContent;
    expect(divText).toEqual('second');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
