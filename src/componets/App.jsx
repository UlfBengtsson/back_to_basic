import React, { Component } from "react";
import StaticCalc from "./StaticCalc";
import UserCalc from "./UserCalc";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <p>sub text to our h1</p>

        <StaticCalc />

        <hr />

        <UserCalc />
      </div>
    );
  }
}

export default App;
