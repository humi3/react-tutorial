import * as React from "react";
import { hot } from "react-hot-loader/root";
import Square from "./square";

type Porps = {
  squares: Array<String>;
  onClick: (i: number) => void;
}

class Board extends React.Component<Porps> {

  constructor(props: Porps) {
    super(props)
  }

  renderSquare(i: number) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
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