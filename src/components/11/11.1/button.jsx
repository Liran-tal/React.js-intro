import React from 'react';
import './button.css';

class Button extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {};
  }

  render () {
    return (
      <div className='Flex-col'>
        <button 
          onClick={({target}) => this.props.callback(target.innerText)}
          className={this.props.color}
        >
          {this.props.color}
        </button>
      </div>
    );
  }
}

export default Button;