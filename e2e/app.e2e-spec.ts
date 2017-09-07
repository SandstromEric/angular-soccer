import { AngularSoccerPage } from './app.po';

describe('angular-soccer App', () => {
  let page: AngularSoccerPage;

  beforeEach(() => {
    page = new AngularSoccerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
