import React from "react";
import "./Input11.3.css";


class Input extends React.Component {
	constructor (props) {
		super (props);

		this.state = {id: this.props.id, value: this.props.value};
	}

	// handleChange = ({target}) => {
	// 	this.setState({value: target.value});
	// }

	render () {
		return (
			<label For={this.state.id}>
				{this.props.label}
				<input 
					// onChange={this.handleChange}
					onChange={this.props.callback}
					type={this.props.type} 
					value={this.state.value}
					className={this.props.id}
				/>
			</label>
		)
	}
}

export default Input;