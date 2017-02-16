import { ContasPage } from './app.po';

describe('contas App', function() {
  let page: ContasPage;

  beforeEach(() => {
    page = new ContasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
