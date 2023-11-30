!function(){"use strict";function e(e,t){return Math.floor(Math.random()*(t-e+1))+e}const t=new class{constructor(){this.boardSize=4,this.container=null,this.boardEl=null,this.cells=[],this.score=0}bindToDOM(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}drawScore(e=0){this.container.querySelector(".score")&&this.container.querySelector(".score").remove(),this.score+=e;const t=document.createElement("div");t.classList.add("score"),t.textContent=`Ваш счёт: ${this.score}`,this.container.prepend(t)}drawUi(){this.boardEl=this.container.querySelector(".board");for(let e=0;e<this.boardSize**2;e+=1){const e=document.createElement("div");e.classList.add("cell","board-theme"),this.boardEl.appendChild(e)}this.cells=Array.from(this.boardEl.children)}drawGoblin(e=0){document.querySelector(".goblin")&&document.querySelector(".goblin").remove();const t=document.querySelectorAll(".cell"),i=document.createElement("div");i.classList.add("goblin"),t[e].appendChild(i)}};t.bindToDOM(document.querySelector("#game-container"));const i=new class{timeOut=1e3;constructor(e){this.gamePlay=e,this.position=null,this.goblinAppearanceInterval=null}init(){this.gamePlay.drawScore(),this.gamePlay.drawUi(),this.gamePlay.drawGoblin(),this.changesGoblinPosition(),this.registrationEvents()}registrationEvents(){const e=document.querySelector(".board");this.onCellClick=this.onCellClick.bind(this),e.addEventListener("click",this.onCellClick)}changesGoblinPosition(){let e=0;this.goblinAppearanceInterval=setInterval((()=>{if(4===e)return clearInterval(this.goblinAppearanceInterval),void alert(`Вы проиграли. Ваш счёт ${this.gamePlay.score}`);this.position=this.createPosition(0,this.gamePlay.boardSize-1,this.gamePlay.boardSize,this.position),this.gamePlay.drawGoblin(this.position),e+=1}),this.timeOut)}clearGoblinAppearanceInterval(){clearInterval(this.goblinAppearanceInterval)}createPosition(t,i,n,o){let r,a=0;for(;(!r||o===r)&&a<1e3;)r=e(t,i)*n+e(t,i),a+=1;return r}onCellClick(e){e.target.className.includes("goblin")&&(this.position=this.createPosition(0,this.gamePlay.boardSize-1,this.gamePlay.boardSize,this.position),this.gamePlay.drawScore(1),this.gamePlay.drawGoblin(this.position),this.clearGoblinAppearanceInterval(),this.changesGoblinPosition())}}(t);i.init()}();