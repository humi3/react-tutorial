import * as React from "react";
import { hot } from "react-hot-loader/root";
import Square from "./square";

type State = {
  squares: Array<String>;
  xIsNext: boolean;
}

class Board extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      squares: Array<String>(9).fill(""),
      xIsNext: true,
    }
  }


  renderSquare(i: number) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : '○';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  /**
   * 勝敗判定
   * 
   * マルバツゲームに勝利した場合、勝者プレイヤーの名前を返す。
   * 
   * @param squares
   * 
   * @returns string | null 
   */
  calculateWinner(squares: Array<String>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '○');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default hot(Board);