import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> TicTacToe </h1>
    <board></board>
      `,
  styles: []
})
export class AppComponent {}

@Component ({
  selector: `board`,
  template: `
    <div class="row" *ngFor="let row of [0,1,2]">
      <square *ngFor="let col of [0,1,2]"
      [state]="squares[col+row*3]"
      (click)="makeMove(col+row*3)"></square>
    </div>
    <div class="row">
      <div class="status">{{status}}</div>
    </div>
      `,
  styles:[`
    .row {clear: both;}
        `]
    })

export class Board{
  squares = Array(9).fill(null);
  player = 'X'

  get status(){
    return `Player: ${this.player}`;
  }

  makeMove(position){
    if(!this.squares[position]){
      this.squares[position] = this.player;
      this.player = this.player == 'X' ? 'O' : 'X';
    }
  }


}

@Component({
  selector: `square`,
  template: `{{state}}`,
  styles:[`
  	:host{
  		width:45px;
  		height:45px;
  		border: solid 1px;
  		float:left;
      font-size: 36px;
      text-align:center;
  	}
  `]
})
export class Square{
  @Input() state;
}
