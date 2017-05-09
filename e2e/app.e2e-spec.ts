import { Ngcribs2Page } from './app.po';

describe('ngcribs2 App', () => {
  let page: Ngcribs2Page;

  beforeEach(() => {
    page = new Ngcribs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
