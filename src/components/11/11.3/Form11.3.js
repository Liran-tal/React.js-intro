import React from "react";
import './Form11.3.css';
import TextInput from "./Input11.3.jsx";
import Select from "./Select11.3.jsx";
import Textarea from "./Textarea11.3.jsx";
import Buttons from "../../4/4.1/buttons";

class App extends React.Component {
	constructor (props) {
		super (props);

		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			freeText: '',
			isSubmit: false,
		}
	}

	getTarget = ({id, value}) => {
		this.setState({[id]: value});
	}

	// reviewFields = () => {
	// 	return (
	// 		<div className="review-input-screen">
	// 			{confirm(	
	// 				`First Name: ${this.state.firstName}
	// 				Last Name: ${this.state.lastName}
	// 				Age: ${this.state.age}
	// 				Free Text: ${this.state.freeText}`
	// 			) && <div>Submited!</div>}
	// 		</div>
	// 	)
	// }

	// outputButtons = (event) => {
	// 	event.target.id === "back" && this.setState({displayOutput:false, displayInput:true})
	// 	event.target.id === "send" && this.setState({displayOutput:false, displayMassage: true})
	// }

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextInput 
					value={this.state.firstName}
					callback={this.getTarget}
					id='firstName'
					label= 'First Name:'
					type= 'text'	
				/>
				<TextInput 
					value={this.state.lastName}
					callback={this.getTarget}
					id='lastName'
					label= 'Last Name:'
					type= 'text'
				/>
				<Select 
					value={this.state.age}
					callback={this.getTarget}
					id='age'
					label= 'Age:'
					options={['0-18', '18-21', '21-35', '35-67', '67+']}
				/>
				<Textarea
					value={this.state.freeText}
					callback={this.getTarget}
					id='age'
					label= 'Age:'
				/>
				<input type='submit' value="submit" />
				{this.state.isSubmit && this.reviewFields}
			</form>
		);
	}
}

export default App;