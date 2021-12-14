import React from "react";
import './App.css';


class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {isShown: true, boxClass: 'box'};
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({isShown: !this.state.isShown})
        }}>
          Show / Hide
        </button>
        <br/>
        {this.state.isShown && <div className="box"></div>}
      </div>
    );
  }
}

export default App;
