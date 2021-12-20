import React from "react";
import InputField from "../../13/13.2/InputField";

class App extends React.Component {
	inputFieldRef = React.createRef();
	state = {isFocus: true};

	componentDidMount = () => {

	}


	render () {
		return (
			<div>
				<InputField
					ref={this.inputFieldRef}
					type="text"
					isFocus={this.state.isFocus}
				/>
			</div>
		)
	}
}

export default App;