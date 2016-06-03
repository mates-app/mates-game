import { GameMatesPage } from './app.po';

describe('game-mates App', function() {
  let page: GameMatesPage;

  beforeEach(() => {
    page = new GameMatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('game-mates works!');
  });
});
