import React from "react";
import './Timer.css';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        time: state.time + 1
      }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log(`Elapsed time: ${this.state.time}`);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer-container">
        <h1>Timer Component</h1>
        <h3>Elapsed Time: <i>{this.state.time}</i></h3>
      </div>
    )
  }
}

export default Timer;
