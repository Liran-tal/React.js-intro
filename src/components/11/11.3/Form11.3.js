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
			isApproved: false
		}
	}

	getTarget = ({id, value}) => {
		this.setState({[id]: value});
	}

	reviewFields = () => {
		return (
			<div className="review-input-screen">
				First Name: {this.state.firstName}
				Last Name: {this.state.lastName}
				Age: {this.state.age}
				Free Text: {this.state.freeText}

			</div>
		)
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextInput 
					callback={this.getTarget}
					id='firstName'
					label= 'First Name:'
					type= 'text'	
				/>
				<TextInput 
					callback={this.getTarget}
					id='lastName'
					label= 'Last Name:'
					type= 'text'
				/>
				<Select 
					callback={this.getTarget}
					id='age'
					label= 'Age:'
					options={['0-18', '18-21', '21-35', '35-67', '67+']}
				/>
				<Textarea
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