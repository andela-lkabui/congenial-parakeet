export class BugFreeFrontEndPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bug-free-front-end-app h1')).getText();
  }
}
