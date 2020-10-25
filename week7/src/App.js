import React from 'react';
import Textbox from './components/textbox';
import Alert from './components/alert';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      target: 0
    };
  }

  setValue(e) {
    this.setState({ target: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Input a number, then click the button until it reaches the input number></p>
          <Textbox textboxLabel="Target Count" id="textBox1" value={this.state.target} onchange={e => this.setValue(e)} />
          <p>Count: {this.state.counter}</p>
          <div className="buttonContainer">
            <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}> Click to Increase Count </button>
            <button onClick={() => { this.setState({ counter: 0 }) }} > Reset Count </button>
          </div>
        </header>
        {this.state.target > 0 && this.state.counter >= this.state.target ? <Alert alertText="You have achieved your target." /> : ""}
      </div>
    )
  }
}
export default App;
