import { PoliticsOfUSPage } from './app.po';

describe('politics-of-us App', function() {
  let page: PoliticsOfUSPage;

  beforeEach(() => {
    page = new PoliticsOfUSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
