import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  clearState = () => {
    this.setState({ seconds: 0 });
  };
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log("the current state is ", this.state)
    return (
      <div>
        Seconds: {this.state.seconds}
        <p>The count is: {this.props.count}</p>
        <button onClick={this.clearState}>Reset Timer</button>
      </div>
    );
  }
}
export default Timer;