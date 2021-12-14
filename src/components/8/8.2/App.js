import React from 'react';
import './App.css';
import Box from './Box'

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {className: 'Box'};
  }
  
  render () {
    return (
      <div className="App">
        <Box 
					className={this.state.className}
				/>
        <Box 
					className={this.state.className}
				/>
        <Box 
					className={this.state.className}
				/>
      </div>
    );
  }
}

export default App;