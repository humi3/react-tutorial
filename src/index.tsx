import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

const App = () => <div>Hello World!</div>;
export default hot(App);

ReactDOM.render(<App />, document.getElementById("app"));