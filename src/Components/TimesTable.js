import React from "react";
export default class TimesTable extends React.Component {
  render () {
    const table = [];

    for (let i = 1; i <= 10; i++) {
      if(this.props.number != null){
        const row = [];
        row.push(<td>{this.props.number} X {i} = {i * this.props.number}</td>);
        table.push(<tr>{row}</tr>);
      }
    }

    return (
      <table>
        {table}
      </table>
    )
  }
}