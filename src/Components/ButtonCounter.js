import React from 'react';
export default class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCount: 0
    };
  }
  render () {
    // const [clickedCount, setClickedCount] = React.useState(0)
    const clickHandler = () => {
        this.setState({ clickedCount: this.state.clickedCount+1 })
    }
    return (
      <div>
        <button onClick={clickHandler}>click count: {this.state.clickedCount}</button>
      </div>
    );
  }
}