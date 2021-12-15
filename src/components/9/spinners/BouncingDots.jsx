import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      spinner: Math.floor(Math.random() * 4), 
      spinners_array: [
        
      ],
      className: ''};
  }

  componentDidMount () {

    setTimeout(() => {
      this.setState({className: "App App-exit-screen"})
    }, 5000);
  }

  componentDidUpdate () {
  }

  render () {
    return (
      <div className={this.state.className}>
      </div>
    );
  }
}

export default App;