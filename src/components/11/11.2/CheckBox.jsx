import React from 'react';
import './CheckBox.css';

class CheckBox extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {isChecked: this.props.isChecked};
  }

  // getIsChecked = () => {
  //   if (this.props.isChecked) {
  //     return "checked"
  //   }
  // }

  render () {
    return (
      <div className='Flex-col'>
        <input 
          type="checkbox" 
          name={`checkbox${this.props.id}`}
          defaultChecked={this.props.isChecked && "checked"}
        >
        </input>
        <label for={this.props.id}> 
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default CheckBox;