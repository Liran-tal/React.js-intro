import React from "react";
import "./Textarea11.3.css";


class Textarea extends React.Component {
	constructor (props) {
		super (props);

		this.state = {};
	}

	render () {
		return (
			<label For={this.props.id}>
				{this.props.label} 
				<textarea
					id={this.props.id}
					value={this.state.value}
					onChange={this.props.callback}
				>
				</textarea>
			</label>
		)
	}
}

export default Textarea;