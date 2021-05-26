import React, { Component } from "react";

class CalcHistory extends Component {
  render() {
    const rows = this.props.previusResults.map((row, index) => (
      <tr key={index}>
        <td>{row.numA}</td>
        <td>{row.numB}</td>
        <td>{row.reslut}</td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Number A</th>
            <th>Number B</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default CalcHistory;
