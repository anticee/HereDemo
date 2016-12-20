import { HereDemoPage } from './app.po';

describe('here-demo App', function() {
  let page: HereDemoPage;

  beforeEach(() => {
    page = new HereDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
