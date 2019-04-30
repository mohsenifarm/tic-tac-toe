const player = ["X", "O"];
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//state wars

var turn, count, winner, board;

//dom
var tabEl = document.querySelector("table");
var resetBtn = document.querySelector("#reset-btn");
var placard = document.querySelector("#placard");
//eventListener

tabEl.addEventListener("click", findIndex);
resetBtn.addEventListener("click", resetGame);

//call init
init();
//functions

function resetGame() {
  //console.log("reset btn works");
  init();
  //   tabEl.forEach(function(el) {
  //     console.log(el);
  //   });
}

function findIndex(event) {
  if (!document.getElementById(event.target.id).innerHTML && winner === false) {
    board[event.target.id] = player[turn];
    document.getElementById(event.target.id).innerHTML = board[event.target.id];
  }
  if (getWinner(event.target.id)) {
    // alert(`player ${player[turn]} is WiNnEr!!!!`);
    placard.innerHTML = `<h2>player ${player[turn]} is WiNnEr!!!!</h2>`;
    winner = true;
  }
  count++;
  turn = count % 2;
  if (!winner)
    placard.innerHTML = `<h3>It's player ${player[turn]}'s turn</h3>`;

  //   console.log(player[turn]);
  //parseInt(getWinner(event.target.id));
}

function getWinner(id) {
  var test = false;
  const winnArr = [];
  winCombo.forEach(function(win) {
    if (win.includes(parseInt(id))) {
      //console.log(win);
      winnArr.push(win);
    }
  });

  winnArr.forEach(function(w) {
    // if (
    //   document.getElementById(w[0]).innerHTML ===
    //     document.getElementById(w[1]).innerHTML &&
    //   document.getElementById(w[0]).innerHTML ===
    //     document.getElementById(w[2]).innerHTML
    // ) {
    if (board[w[0]] === board[w[1]] && board[w[0]] === board[w[2]]) {
      test = true;
      return test;
    }
  });
  return test;
}

function init() {
  count = 0;
  turn = 0;
  winner = false;
  board = new Array(9).fill(null);
  placard.innerHTML = `<h3>It's player X's turn</h3>`;
  render();
}
function render() {
  board.forEach((b, idx) => {
    document.getElementById(idx).innerHTML = b;
  });
}
