import React from 'react'

class App extends React.Component {
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
          <button onClick = {() => {this.setState({counter: 0})}} > Reset </button>
        </header>
      </div>
      )
  }
}
export default App;
