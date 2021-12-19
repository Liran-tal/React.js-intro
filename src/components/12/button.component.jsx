import React from "react";
import './button.component.css';

class Button extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
			<button 
				className="button"
				onClick={this.props.callback}
				value={this.props.value}
			>
				{this.props.text}
			</button>
		)
	}
}

export default Button;




