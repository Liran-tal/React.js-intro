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
		else {
			this.getJokeFromCategory(target.value);
		}
	}

	getRandomJoke = async () => {
		const response = await axios.get ('https://api.chucknorris.io/jokes/random');
		this.setState({joke: response.data.value});
	}
	
	getJokesCategories = async () => {
		const {data} = await axios.get ('https://api.chucknorris.io/jokes/categories');
		this.setState({categories: data});
	}
	
	setCategoriesButtons = () => {
		return (
			this.state.categories.map((category) => {
				return(
					<Button
						key={category}
						text={category}
						value={category}
						callback={this.handleButtonClicked}
					/>
				)
			})
		)
	}

	getJokeFromCategory = async (category) => {
		const {data} = await axios.get('https://api.chucknorris.io/jokes/random?category='+ category);
		this.setState({joke: data.value})
	}

	componentDidMount = () => {
		this.getJokesCategories();
	}

	render () {
		return (
			<div className="main-wrapper">
				<h1>
					{this.state.joke}
				</h1>
				<Button
					text="Random Joke"
					value="random"
					callback={this.handleButtonClicked}
				/>
				<div>
					{this.state.categories.length > 0 && this.setCategoriesButtons()}
				</div>
				
			</div>
		);
	};
}

export default App;