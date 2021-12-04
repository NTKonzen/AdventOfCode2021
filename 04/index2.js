const { boards, draws } = require("./data");

const winnerMap = {};
const winnerArr = [];

let winner;
let finalDraw;

const hasRow = (board) => {
  return board.some((row) => row.every((v) => v === "*"));
};

const hasCol = (board) => {
  for (let i = 0; i < board[0].length; i++) {
    if (board.every((v) => v[i] === "*")) return true;
  }
  return false;
};

const hasBingo = (board) => hasCol(board) || hasRow(board);

for (const draw of draws) {
  let bingo = false;
  for (const i in boards) {
    const board = boards[i];
    for (const i in board) {
      const row = board[i];
      const index = row.findIndex((v) => v == draw);
      const hasDraw = index !== -1;
      if (hasDraw) row.splice(index, 1, "*");
      board[i] = row;
    }
    if (hasBingo(board)) {
		if (!winnerMap[i]){
			winnerMap[i] = true;
			winnerArr.push("");
		};
      winner = board;
      finalDraw = draw;
      if (winnerArr.length === boards.length) {
			bingo = true;
			break;
		};
    }
  }
  if (bingo) break;
}

winner = winner
  .map((row) => row.filter((v) => v !== "*").join(" "))
  .join(" ")
  .trim()
  .split(/\s+/g)
  .map((v) => +v);

const sum = winner.reduce((a, b) => a + b);
console.log(sum * finalDraw);
