import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {red: 255, green: 255, blue: 255, counter: 0, className: "App"};
  }
  
  componentDidMount () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    this.setState({red: red, green: green, blue: blue});
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.setState((prevState) => {
        prevState.red = Math.floor(Math.random() * 255);
        prevState.green = Math.floor(Math.random() * 255);
        prevState.blue = Math.floor(Math.random() * 255);
        prevState.counter += 1;
        prevState.className = prevState.counter >= 5 && "App Circle";

        return prevState;
      });
    }, 500);
  }

  render () {
    return (
      <div 
        className={this.state.counter < 5 ? "App" : "App Circle"}
        style={{
          background:`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }}
      >
      </div>
    );
  }
}

export default App;