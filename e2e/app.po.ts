export class GameMatesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('game-mates-app h1')).getText();
  }
}
