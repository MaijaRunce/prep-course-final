export type XO = "X" | "O" | "-";

export class Game {
  private cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
private turn: XO = "X";

constructor() {
  this.restart();
}
restart(): void {
  this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  this.turn = "X";
  console.log("Game restarted");
}     

getCells(): XO[] {
  return this.cells;
} 

getTurn(): XO {
  return this.turn;
}

  getWinner(): XO {
  const wins = [
    [0, 1, 2], // rinda 1
    [3, 4, 5], // rinda 2
    [6, 7, 8], // rinda 3
    [0, 3, 6], // kolonna 1
    [1, 4, 7], // kolonna 2
    [2, 5, 8], // kolonna 3
    [0, 4, 8], // diagonāle 1
    [2, 4, 6]  // diagonāle 2
  ];

  for (const [a, b, c] of wins) {
    if (this.cells[a] !== "-" &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]) {
      return this.cells[a]; // Atgriež "X" vai "O"
    }
  }

  return "-"; // Ja nav uzvarētāja
}
isTie(): boolean {
  return this.cells.every(cell => cell !== "-") && this.getWinner() === "-";
}

  onClick(i: number): void {
    if (this.cells[i] !== "-") {
     console.log(`Cell already filled.Ignoring`);
      return
    }
    if (this.getWinner() !== "-" || this.isTie()) {
 console.log(`Game already finished.Ignoring click`);
      return;
  }

  this.cells[i] = this.turn;
    console.log (`Player ${this.turn} moved.`);

  if (this.getWinner() !== "-") {
      console.log(`Player ${this.turn} won!`);
    } else if (this.isTie()) {
      console.log("It's a tie!");
    } else {
      this.turn = this.turn === "X" ? "O" : "X";
      console.log(`It's now ${this.turn}'s turn.`);
  }
  }
}