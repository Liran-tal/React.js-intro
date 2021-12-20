import React from "react";
import youtube from "./API/youtube";
import SearchBar from "./search-bar/search-bar";
import VideoList from "./videos-list/videos-list";
import VideoDetails from "./video-details/video-details";



class App extends React.Component {
	state = {videos: [], selectedVideo: null};

	componentDidMount = () => {
		this.onTermSubmit("rickroll")
	}

	onTermSubmit = async (term) => {
		console.log(term);
		const response = await youtube.get('/search', {
			params: {
				q: term,
			}
		})

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	}

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});
	}

	render () {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetails video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;