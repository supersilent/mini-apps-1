let gameState = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  continueFlag: true,
  currentChar: "x",
  rotate: "false",
  xWin:0,
  oWin:0
};

let obj = {
  x: "o",
  o: "x"
};

document.getElementById("xName").innerHTML = "x :";
document.getElementById("oName").innerHTML = "o :";
document.getElementById("resultX").innerHTML = "x won 0 times.";
document.getElementById("resultO").innerHTML = "o won 0 times.";

document.getElementById("xName").onclick = () => {
  document.getElementById("xName").innerHTML =
    "x : " + prompt("What is x name?");
};
document.getElementById("oName").onclick = () => {
  document.getElementById("oName").innerHTML =
    "o : " + prompt("What is o name?");
};

let detectWin = () => {
  for (let i in obj) {
    //vertical
    for (let k = 0; k < 3; k++) {
      for (let j = 0 + k * 3; j < 3 + k * 3; j++) {
        if (document.getElementById(`${j}`).innerHTML !== i) {
          break;
        }
        if (j === 2 + k * 3) {
          return printWin(i);
        }
      }
    }

    //horizontal
    for (let m = 0; m < 3; m++) {
      for (let l = 0 + m; l < 9; l += 3) {
        if (document.getElementById(`${l}`).innerHTML !== i) {
          break;
        }
        if (l === 6 + m) {
          return printWin(i);
        }
      }
    }

    //diagonal
    for (let m = 0; m < 9; m += 4) {
      if (document.getElementById(`${m}`).innerHTML !== i) {
        break;
      }
      if (m === 8) {
        return printWin(i);
      }
    }
    for (let m = 2; m < 9; m += 2) {
      if (document.getElementById(`${m}`).innerHTML !== i) {
        break;
      }
      if (m === 6) {
        return printWin(i);
      }
    }
  }

  return false;
};

let rotate = gameBoard => {
  let newBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      newBoard[j][2 - i] = gameBoard.board[i][j];
    }
  }
  gameState.board = newBoard;
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML =
      gameState.board[Math.floor(i / 3)][Math.floor(i % 3)];
  }
};

let gravity = gameBoard => {
  let newBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
  for (let i = 2; i >= 0; i--) {
    for (let j = 0; j < 3; j++) {
      if (i === 2 && gameBoard.board[i][j]) {
        newBoard[i][j] = gameBoard.board[i][j];
      } else if (i === 1) {
        if (newBoard[i + 1][j]) {
          newBoard[i][j] = gameBoard.board[i][j];
        } else {
          newBoard[i + 1][j] = gameBoard.board[i][j];
        }
      } else if (i === 0) {
        if (!newBoard[i + 2][j]) {
          newBoard[i + 2][j] = gameBoard.board[i][j];
        } else if (!newBoard[i + 1][j]) {
          newBoard[i + 1][j] = gameBoard.board[i][j];
        } else {
          newBoard[i][j] = gameBoard.board[i][j];
        }
      }
    }
  }
  gameState.board = newBoard;
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML =
      gameState.board[Math.floor(i / 3)][Math.floor(i % 3)];
  }
};

let printWin = char => {
  document.getElementById("result").innerHTML = `${char} is Winner!`;
  if (char === "x") {
    document.getElementById("resultX").innerHTML = `x won ${++gameState.xWin} times.`;
  } else {
    document.getElementById("resultO").innerHTML = `o won ${++gameState.oWin} times.`;
  }
  gameState.currentChar = char;
  return true;
};

for (let i = 0; i < 9; i++) {
  document.getElementById(`${i}`).onclick = () => {
    if (gameState.continueFlag) {
      if (!document.getElementById(`${i}`).innerHTML) {
        document.getElementById(`${i}`).innerHTML = gameState.currentChar;
        gameState.board[Math.floor(i / 3)][Math.floor(i % 3)] =
          gameState.currentChar;
        gameState.currentChar = obj[gameState.currentChar];
        if (!gameState.rotate) {
          console.log(gameState.rotate);
          rotate(gameState);
          gravity(gameState);
        }
        if (detectWin()) {
          gameState.continueFlag = false;
        }
      }
    }
  };
}

document.getElementById("reset").onclick = () => {
  gameState.continueFlag = true;
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML = "";
    gameState.board[Math.floor(i / 3)][Math.floor(i % 3)] = "";
  }
  let winMsg = document.getElementById("result").innerHTML;
  if (!winMsg) {
    gameState.currentChar = "x";
  }

  document.getElementById("result").innerHTML = "";
};

document.getElementById("rotate").onclick = () => {
  gameState.rotate = !gameState.rotate;
  if (!gameState.rotate) {
    document.getElementById("rotate").style.backgroundColor = "blue";
    document.getElementById("rotate").style.color = "white";
  } else {
    document.getElementById("rotate").style.backgroundColor = "white";
    document.getElementById("rotate").style.color = "black";
  }
};
