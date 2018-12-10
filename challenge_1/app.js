let continueFlag = true;
let currentChar = "X";
let obj = {
  X: "O",
  O: "X"
};
let detectWin = () => {
  for (let i of ["X", "O"]) {
    for (let k = 0; k < 3; k++) {
      for (let j = 0 + k * 3; j < 3 + k * 3; j++) {
        if (document.getElementById(`${j}`).innerHTML !== i) {
          break;
        }
        if (j === 2 + k * 3) {
          return true;
        }
      }
    }
  }
  return false;
};

for (let i = 0; i < 9; i++) {
  document.getElementById(`${i}`).onclick = () => {
    if (continueFlag) {
      if (!document.getElementById(`${i}`).innerHTML) {
        document.getElementById(`${i}`).innerHTML = currentChar;
        currentChar = obj[currentChar];
        if (detectWin()) {
          console.log("Game End");
          continueFlag = false;
        }
      }
    }
  };
}

// document.getElementById("0").onclick = () => {
//   if (!document.getElementById("0").innerHTML) {
//     document.getElementById("0").innerHTML = currentChar;
//     currentChar = obj[currentChar];
//   }
// };
