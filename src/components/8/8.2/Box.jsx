import React from 'react';
import './Box.css';

class Box extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {isShow: false, className: "Box"};
  }
  
  componentDidMount() {
    setTimeout(() => {
			this.setState( (prevState) => {
      	return prevState.isShow = true;
			});
    }, 1000);
  }

  componentDidUpdate () {
		setTimeout(() => {
			this.setState( (prevState) => {
      	return prevState.isShow = false;
			});
    }, 4000);
  }

  render () {
    return (
			<div className={this.state.isShow ? "Box" : "Hide"}>
				
			</div>
    );
  }
}

export default Box;