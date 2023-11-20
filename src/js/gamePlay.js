export default class GamePlay {
    constructor() {
      this.boardSize = 4;
      this.container = null;
      this.boardEl = null;
      this.cells = [];
      this.score = 0;
    }
  
    bindToDOM(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }
  
      this.container = container;
    }
  
    drawScore(num = 0) {
      if (this.container.querySelector('.score')) {
        this.container.querySelector('.score').remove();
      }
  
      this.score += num;
      const score = document.createElement('div');
  
      score.classList.add('score');
      score.textContent = `Ваш счёт: ${this.score}`;
  
      this.container.prepend(score);
    }
  
    drawUi() {
      this.boardEl = this.container.querySelector('.board');
  
      for (let i = 0; i < this.boardSize ** 2; i += 1) {
        const cellEl = document.createElement('div');
        
        cellEl.classList.add('cell', 'board-theme');
        
        this.boardEl.appendChild(cellEl);
      }
      
      this.cells = Array.from(this.boardEl.children);
    } 
    
    drawGoblin(position = 0) {
      if (document.querySelector('.goblin')) {
        document.querySelector('.goblin').remove();
      }
    
      const allCells = document.querySelectorAll('.cell');
      const img = document.createElement('div');
      
      img.classList.add('goblin');
      allCells[position].appendChild(img);
    }
  }