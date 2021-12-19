import React from "react";
import "./Select11.3.css";


class Select extends React.Component {
	constructor (props) {
		super (props);

		this.state = {id: this.props.id, value: this.props.value};
	}

	// value={this.state.age}
	// 				callback={this.getTarget}
	// 				id='age'
	// 				label= 'Age:'
	// 				options={['0-18', '18-21', '21-35', '35-67', '67+']}

	setOptions = () => {
		return this.props.options.map((option) => {
			return <option value={option}>{option}</option>
		})
	}

	render () {
		return (
			<label For={this.props.id}>
				{this.props.label} 
				<select
					id={this.props.id}
					value={this.state.value}
					onChange={this.props.callback}
				>
					{this.setOptions}
				</select>
			</label>
		)
	}
}

export default Select;