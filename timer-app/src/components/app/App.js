import React from 'react';
import Timer from '../timer/Timer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showTimer: true,
    };
  }

  killTimer() {
    this.setState({
      showTimer: false,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>App Component</h1>

        {this.state.showTimer && <Timer />}
        {!this.state.showTimer && <h3>Timer was Removed!</h3>}
        <button onClick={() => this.killTimer()}>Stop and Remove the Timer</button>
      </div>
    );
  }
}

export default App;
