import * as React from "react";
import { hot } from "react-hot-loader/root";

type Props = {
  value: number
}

type State = {
  value: String
}

class Square extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default hot(Square);