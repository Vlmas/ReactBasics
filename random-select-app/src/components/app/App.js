import React from "react";
import Profile from '../profile/Profile';
import { persons } from '../../persons';
import './App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      persons: persons,
      index: 0,
    };
  }

  refreshIndex() {
    let index;
    do {
      index = parseInt(Number(Math.random() * this.state.persons.length))
    } while (index === this.state.index);

    this.setState({
      index: index
    });
  }

  render() {
    return (
      <div className="container">
        <h2 id="header">React Application - Random Profile Selector</h2>
        <button onClick={this.refreshIndex.bind(this)}>Refresh Profile</button>
        
        <div className="app">
          <Profile person={this.state.persons[this.state.index]} />
        </div>
      </div>
    );
  }
}

export default App;
