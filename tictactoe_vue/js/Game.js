class Game {
  constructor(){
    this.inProgress = true;
    this.winner = null;       //o or x
    this.currentTurn = Game.O;  //O always start firsts
    this.movesMade = 0;

    //creates 9 new square objects into array
    this.squares = new Array(9).fill().map(s => new Square());
  }

  makeMove(i){ //index i
    if(this.inProgress && !this.squares[i].value){
      this.squares[i].value = this.currentTurn;
      this.movesMade++;
      this.checkForWinner();
      this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O;
    }

  }
  //called after each move
  checkForWinner(){
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    winningCombos.forEach((wc) => {
      const[a, b, c] =  wc;
      const sqA = this.squares[a];
      const sqB = this.squares[b];
      const sqC = this.squares[c];

      //checking for winner
      if(sqA.value && sqA.value === sqB.value && sqA.value === sqC.value){
        this.inProgress = false;
        this.winner = sqA.value;  // O or X
        sqA.isHighlighted = sqB.isHighlighted = sqC.isHighlighted = true;
      }

    });

    //check for tie
    if(this.movesMade === 9){
      this.inProgress = false; //winner would be null since the if statement above didnt run
    }

  }

    resetGame(){
      this.inProgress = true;
      this.winner = null;       //o or x
      this.currentTurn = Game.O;  //O always start firsts
      this.movesMade = 0;

      //creates 9 new square objects into array
      this.squares = new Array(9).fill().map(s => new Square());
    }
}

Game.O = 'O';
Game.X = 'X';
