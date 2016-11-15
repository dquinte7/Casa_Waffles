import { CasaWafflesPage } from './app.po';

describe('casa-waffles App', function() {
  let page: CasaWafflesPage;

  beforeEach(() => {
    page = new CasaWafflesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
