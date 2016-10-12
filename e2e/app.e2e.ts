import { BugFreeFrontEndPage } from './app.po';

describe('bug-free-front-end App', function() {
  let page: BugFreeFrontEndPage;

  beforeEach(() => {
    page = new BugFreeFrontEndPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bug-free-front-end works!');
  });
});
