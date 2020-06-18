import * as React from "react";
import { hot } from "react-hot-loader/root";

type Props = {
  value: number
}

class Square extends React.Component<Props> {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default hot(Square);