import React from "react";
import TextArea from "./TextArea";


class App extends React.Component {
	textAreaRef = React.createRef();
	state = {
		textAreaValue: '',
		textToPaste: '',
	};

	writeToClipBaord = () => {
		const textToCopy = this.textAreaRef.current.props.text;
		// console.log("textarea ref: ", this.textAreaRef);
		console.log("textarea text: ", textToCopy);
		navigator.clipboard.writeText(textToCopy);
	}

	readFromClipBaord = async () => {
		const textToPaste = await navigator.clipboard.readText();
		this.setState({textToPaste: textToPaste});
	}

	catchValue = ({target: {value}}) => {
		this.setState({textAreaValue: value})
	}

	render () {
		return (
			<div>
				<TextArea
					ref={this.textAreaRef}
					catchValue={this.catchValue}
					text={this.state.textAreaValue}
					placeHolder="Enter text here"
					btnOnClick={this.writeToClipBaord}
					btnText="Copy"
				/>
				<TextArea
					text={this.state.textToPaste}
					placeHolder="Paste text here"
					btnOnClick={this.readFromClipBaord}
					btnText="paste"
				/>
			</div>
		)
	}
}

export default App;