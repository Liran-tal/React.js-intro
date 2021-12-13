import React from "react";
import './App.css';


class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {num_val: 0};
  }
  
  increment = () => {
    if (this.state.num_val < 10){
      this.setState({num_val: this.state.num_val + 1});
    }
  }
  
  decrement = () => {
    if (this.state.num_val > -10){
      this.setState({num_val: this.state.num_val - 1});
    }
  }

  styleClassName = () => {
    console.log("hello from styleClassName");
    if (this.state.num_val > 0) {
      return "green";
    }
    
    if (this.state.num_val < 0) {
      return "red";
    }

    return "black";
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.increment} className="button">
          +
        </button>
        <div className={this.styleClassName()}>
          {this.state.num_val}
        </div>
        <button onClick={this.decrement} className="button">
          -
        </button>
      </div>
    );
  }
}

export default App;
