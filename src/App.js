import { useState } from "react";
import Box from "./Components/Box";
import Board from "./Pages/Board";
import "./styles.css";

export default function App() {
  let [board, setBoard] = useState(Array(9).fill(null));
  let [xplayer, setPlayer] = useState(true);
  let [game, setGame] = useState(false);
  let [xcount, setxCount] = useState(0);
  let [ycount, setyCount] = useState(0);

  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handeClick(boxInd) {
    let updatedBoard = board.map((value, ind) => {
      if (boxInd === ind) {
        return xplayer === true ? "X" : "O";
      } else return value;
    });

    setBoard(updatedBoard);

    setPlayer(!xplayer);

    if (game === true) {
      gameover();
      return; // so that it dost add again in score
    }
    let a = checkWinner(updatedBoard);

    if (a) {
      if (a === "X") {
        xcount += 1;
        setxCount(xcount);
      } else {
        setyCount(ycount + 1);
      }
    }
  }
  function checkWinner(board) {
    for (let i = 0; i < win.length; i++) {
      let [x, y, z] = win[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGame(true);
        return board[x];
      }
    }
  }

  function gameover() {
    setBoard(Array(9).fill(null));
    setGame(false);
    setPlayer(true);
  }

  return (
    <div className="App">
      <Board
        item={board}
        onClick={handeClick}
        pwin={checkWinner}
        gameover={gameover}
        xcount={xcount}
        ycount={ycount}
      />
    </div>
  );
}
