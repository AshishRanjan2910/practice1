import React from "react";

class ConditionalButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        winMsg: '',
        isDisable: false,
      };
    }
  
    handleClick = () => {
      const { count } = this.state;
      if (count === 4) {
        this.setState({
          winMsg: 'Congrats! You won :D',
          isDisable: true,
        });
      } else {
        this.setState({
          count: count + 1,
        });
      }
    };
  
    render() {
      const { count, winMsg, isDisable } = this.state;
      return (
        <div>
          <button disabled={isDisable} onClick={this.handleClick}>
            Click me:)
          </button>
          <p>Click counts: {count}</p>
          {winMsg && <p>{winMsg}</p>}
        </div>
      );
    }
  }
  
  export default ConditionalButton;