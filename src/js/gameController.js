import { getRandomInt } from './generators';

export default class GameController {
  timeOut = 1000;

  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.position = null;
    this.goblinAppearanceInterval = null;
  }

  init() {
    this.gamePlay.drawScore();
    this.gamePlay.drawUi();
    this.gamePlay.drawGoblin();
    this.changesGoblinPosition();
    this.registrationEvents();
  }

  registrationEvents() {
    const board = document.querySelector('.board');
    this.onCellClick = this.onCellClick.bind(this);
    board.addEventListener('click', this.onCellClick);
  }

  changesGoblinPosition() {
    let counter = 0;

    this.goblinAppearanceInterval = setInterval(() => {
      if (counter === 4) {
        clearInterval(this.goblinAppearanceInterval);
        alert(`Вы проиграли. Ваш счёт ${this.gamePlay.score}`);
        return;
      }

      this.position = this.createPosition(0, this.gamePlay.boardSize - 1, this.gamePlay.boardSize, this.position);

      this.gamePlay.drawGoblin(this.position);

      counter += 1;
    }, this.timeOut);
  }

  clearGoblinAppearanceInterval() {
    clearInterval(this.goblinAppearanceInterval);
  }

  createPosition(min, max, boardSize, oldPosition) {
    let position;
    let index = 0;
  
    while ((!position || oldPosition === position) && index < 1000) {
      let string = getRandomInt(min, max);
      let column = getRandomInt(min, max)
  
      position = string * boardSize + column;
      index += 1;
    }
  
    return position;
  }

  onCellClick(elem) {
    if (elem.target.className.includes('goblin')) {

      this.position = this.createPosition(0, this.gamePlay.boardSize - 1, this.gamePlay.boardSize, this.position);

      this.gamePlay.drawScore(1);
      this.gamePlay.drawGoblin(this.position);
      this.clearGoblinAppearanceInterval();
      this.changesGoblinPosition();
    }
  }
}