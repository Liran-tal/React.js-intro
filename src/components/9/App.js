import React from 'react';
import './App.css';

const spinners = {
  CircleSpinner () {
    return (
      <div class="circle"></div>
    );
  },

  CommetSpinner () {
    <div class="comet"></div>
  },

  BouncingDots () {
    <div class="horizonDots">
      <span class="hDot1 dots"></span>
      <span class="hDot2 dots"></span>
      <span class="hDot3 dots"></span>
    </div>
  },

  LoadDots () {
    <div class="horizonDots">
        <span class="bDot1 dots"></span>
        <span class="bDot2 dots"></span>
        <span class="bDot3 dots"></span>
    </div>
  }
}

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      spinner: Math.floor(Math.random() * 4), 
      spinners_array: [
        CircleSpinner,
        CommetSpinner,
        LoadDots,
        BouncingDots
      ]
    }
  }

  componentDidMount () {

    setTimeout(() => {
      this.setState({className: "App App-exit-screen"})
    }, 5000);
  }

  render () {
    return (
      <div className='App'>
        {this.state.spinners_array[this.state.spinner]()}
      </div>
    );
  }
}

export default App;