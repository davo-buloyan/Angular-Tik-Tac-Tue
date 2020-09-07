import { Component, OnInit } from '@angular/core';

import { Gamelogic } from './../gamelogic';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic ) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information.innerHTML = currentPlayer;
  }

  async clickSubfeld( subfild: any ): Promise<void> {
    if(this.game.gameStatus === 1 ) {
      const position = subfild.currentTarget.getAttribute("position");

      this.game.setField(position, this.game.currentTurn)
      const color = this.game.getPlayerColorClass();
      subfild.currentTarget.classList.add(color);


     await this.game.gamecheckGameEndWinner().then ( (end: boolean) => {
      if(this.game.gameStatus === 0 && end) {
        // information.innerHTML = "The winner is pleyer nr " + this.game.currentTurn;
      }
    } )

      await this.game.chackGameEndFull().then ( (end: boolean) => {
        if(this.game.gameStatus === 0 && end) {
          // information.innerHTML = "No Winner, draw";
        }
      } )

      this.game.changePlayer();


      if(this.game.gameStatus === 1) {
        const currentPlayer = "Current turn: Player " + this.game.currentTurn;
        // information.innerHTML = currentPlayer;
      }
    }
  }

}
