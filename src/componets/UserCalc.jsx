import React, { Component } from "react";
import CalcHistory from "./CalcHistory";

class UserCalc extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
    history: [],
  };

  changeValueOfNum1 = (event) => {
    //console.log(event.target.value);
    this.setState({
      num1: Number(event.target.value),
    });
  };

  changeValueOfNum2 = (event) => {
    //console.log(event.target.value);
    this.setState({
      num2: Number(event.target.value),
    });
  };

  doAdd = () => {
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    const result = num1 + num2;
    this.setState({
      result: result,
    });
    this.saveToHistory(num1, num2, result);
  };

  doSub = () => {
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    const result = num1 - num2;
    this.setState({
      result: result,
    });
    this.saveToHistory(num1, num2, result);
  };

  saveToHistory = (num1, num2, result) => {
    const historyEvent = {
      numA: num1,
      numB: num2,
      reslut: result,
    };

    let newHistoryArr = this.state.history;
    newHistoryArr.push(historyEvent);

    this.setState({ history: newHistoryArr });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.num1}
          onChange={this.changeValueOfNum1}
        />
        <input
          type="number"
          value={this.state.num2}
          onChange={this.changeValueOfNum2}
        />
        <button onClick={this.doAdd}>Addition</button>
        <button onClick={this.doSub}>Subtract</button>
        <p>Result: {this.state.result}</p>

        <CalcHistory />
      </div>
    );
  }
}

export default UserCalc;
