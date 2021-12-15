import React from 'react';
import './ChildToParent.css';
import Button from './button';

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {selected_color: ' ?'}
      
  }
  
  buttonsBackgroundColors = [
    {
      id: 0,
      color: "red"
    },
    {
      id: 1,
      color: "green"
    },
    {
      id: 2,
      color: "blue"
    }
  ]
  
  getSelectedColor = (color) => {
    this.setState({selected_color: color});
  }

  setButtons = () => {
    return (
      this.buttonsBackgroundColors.map((button) => {
        return (
          <Button
            callback={this.getSelectedColor}
            id={button.id}
            key={button.id}
            color={button.color}
          />
        );
      })
    );
  }

  render () {
    return (
      <div className='App'>
        <h1>
          The Color Selected is: {this.state.selected_color}
        </h1>
        {this.setButtons()}
      </div>
    );
  }
}

export default App;