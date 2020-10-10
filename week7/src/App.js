import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        counter: 0
      };
  }


  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <p>EXERCISE COUNTER</p>
          <p>Count: {this.state.counter}</p>
          <button onClick = {() => {this.setState({counter: this.state.counter + 1})}} > Increase! </button>
        </header>
      </div>
    );
  }
}

export default App;
