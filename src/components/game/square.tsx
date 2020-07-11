import * as React from "react";
import { hot } from "react-hot-loader/root";

type Props = {
  value: String
  onClick: () => void;
}

function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default hot(Square);