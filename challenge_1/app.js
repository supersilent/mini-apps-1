let continueFlag = true;
let currentChar = "x";
let obj = {
  x: "o",
  o: "x"
};
let detectWin = () => {
  for (let i of ["x", "o"]) {
    for (let k = 0; k < 3; k++) {
      for (let j = 0 + k * 3; j < 3 + k * 3; j++) {
        if (document.getElementById(`${j}`).innerHTML !== i) {
          break;
        }
        if (j === 2 + k * 3) {
          document.getElementById("result").innerHTML = `${i} is Winner!`;
          return true;
        }
      }
    }

    for (let m = 0; m < 3; m++) {
      for (let l = 0 + m; l < 9; l += 3) {
        if (document.getElementById(`${l}`).innerHTML !== i) {
          break;
        }
        if (l === 6 + m) {
          document.getElementById("result").innerHTML = `${i} is Winner!`;
          return true;
        }
      }
    }

    for (let m = 0; m < 9; m += 4) {
      if (document.getElementById(`${m}`).innerHTML !== i) {
        break;
      }

      if (m === 8) {
        document.getElementById("result").innerHTML = `${i} is Winner!`;
        return true;
      }
    }
    for (let m = 2; m < 9; m += 2) {
      if (document.getElementById(`${m}`).innerHTML !== i) {
        break;
      }

      if (m === 6) {
        document.getElementById("result").innerHTML = `${i} is Winner!`;
        return true;
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
          continueFlag = false;
        }
      }
    }
  };
}

document.getElementById('reset').onclick = () => {
    continueFlag = true;
    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).innerHTML = '';
    }
    document.getElementById("result").innerHTML = '';

}


// document.getElementById("0").onclick = () => {
//   if (!document.getElementById("0").innerHTML) {
//     document.getElementById("0").innerHTML = currentChar;
//     currentChar = obj[currentChar];
//   }
// };
