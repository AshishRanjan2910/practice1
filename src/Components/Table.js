import React from "react";
import Form from "./Form";
import TimesTable from "./TimesTable";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }
  render () {
    const inputHandler = (enteredNumber) => {
      this.setState({ number: enteredNumber })
    }
  
    return(
      <div>
        <Form onInput={inputHandler}/>
        {this.state.number && <TimesTable number={this.state.number}/>}
      </div>
    )
  }
}

export default Table;