import React, { Component } from "react";

class StaticCalc extends Component {
  state = {
    //C# counter part to object fields
    numberA: 3,
    numberB: 5,
  };

  render() {
    return (
      <div>
        <p>
          calc: {this.state.numberA} + {this.state.numberB} ={" "}
          {this.state.numberA + this.state.numberB}
        </p>

        <p>@Model.numberA</p>
        <p>NumA: {this.state.numberA}</p>

        <p>@Model.numberB</p>
        <p>NumB: {this.state.numberB}</p>

        <p>Addition Result: @(Model.numberA + Model.numberB)</p>
        <p>Addition Result: {this.state.numberA + this.state.numberB}</p>
      </div>
    );
  }
}

export default StaticCalc;
