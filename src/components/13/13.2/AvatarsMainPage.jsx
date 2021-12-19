import React from "react";
import axios from "axios";
import CardsDisplay from "./CardsDisplay";
import InputField from "./InputField";



class App extends React.Component {

	state = {
		avatars: [],
		avatarsFiltered: [],
		inputValue: ''
	}
	
	getUsersData = async () => {
		const {data: {results}} = await axios.get('https://randomuser.me/api/', {
			params: {results: 10}
		});

		this.setState({avatars: results, avatarsFiltered: results});
	}

	componentDidMount = () => {
		this.getUsersData();
	}

	handleInputChange = ({target}) => {
		this.setState({
			avatarsFiltered: this.filterByName(target.value),
			inputValue: target.value
		});
	}

	filterByName = (name) => {
		return (
			this.state.avatars.filter((avatar) => {
				return (
					avatar.name.first.includes(name) || 
					avatar.name.last.includes(name) 
				)
			})
		)
	}

	render () {
		return (
			<div>
				<InputField
					type='search'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
				{this.state.avatarsFiltered && CardsDisplay(this.state.avatarsFiltered)}
			</div>
		)
	}
}

export default App;