import React from 'react';
import './App11.2.css';
import CheckBox from './CheckBox';

class App extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {selected_color: ' ?'}
      
  }

  checkBoxes = [
    {
      label: 'I dont know how to work with React syntax',
      isChecked: true
    },
    {
      label: 'I have no idea what is going',
      isChecked: false
    },
    {
      label: 'I am willing to give up',
      isChecked: false
    },
    {
      label: 'I could really use a day off',
      isChecked: true
    },
  ]

  setCheckBoxes = () => {
    return (
      this.checkBoxes.map((checkBox) => {
        return (
          <CheckBox
            id={checkBox.id}
            key={checkBox.id}
            label={checkBox.label}
            isChecked={checkBox.isChecked}
          />
        );
      })
    );
  }

  render () {
    return (
      <div className='App'>
        <h2>How do you feel about React?</h2>
        {this.setCheckBoxes()}
      </div>
    );
  }
}

export default App;