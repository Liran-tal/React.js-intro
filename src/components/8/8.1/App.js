import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {favoriteColor: 'Green'};
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: "Blue"});
    }, 1000);
  }

  componentDidUpdate () {
    const new_color = document.querySelector('#div-name');
    new_color.innerText = `My new favorite color is now ${this.state.favoriteColor}`;
  }

  render () {
    return (
      <div className="App">
        <h1>
          My favorite color is {this.state.favoriteColor}
        </h1>
        <div id="div-name">
          
        </div>
      </div>
    );
  }
}

export default App;