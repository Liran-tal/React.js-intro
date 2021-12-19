import React from "react";
import axios from "axios";
import "./ChuckNorisAPI-12.1.css";
import Button from "./button.component";

class App extends React.Component {
	state = {
		joke: '',
		categories: [],

	}

	handleButtonClicked = ({target}) => {
		if (target.value === "random") {
			this.getRandomJoke();
		}
		
	}
	
	getRandomJoke = async () => {
		const response = await axios.get ('https://api.chucknorris.io/jokes/random');
		this.setState({joke: response.data.value});
	}


	// getJokesCategories = () => {
	// 	response = await axios.get ('');
	// }

	render () {
		console.log(this.state.joke);
		return (
			<div className="main-wrapper">
				<h1>{this.state.joke}</h1>
				<Button
					text="Random Joke"
					value="random"
					callback={this.handleButtonClicked}
				/>
				
				
			</div>
		);
	};
}

export default App;